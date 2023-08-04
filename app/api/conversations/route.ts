import getCurrentUser from "@/app/actions/getCurrentUser";
import Conversation from "@/models/conversation";
import { NextResponse } from "next/server";

export async function POST (req:Request){
    try {
        const currentUser = await getCurrentUser()
        const body = await req.json()
        const {userId,isGroup,members,name} = body

        if (!currentUser?.id || !currentUser?.email){
            return new NextResponse('Unauthorized',{status:401})
        }

        if (isGroup && (!members || members.length < 2 || !name)){
            return new NextResponse('Invalid data',{status:400})
        }

        if (isGroup){
            return null
        }

        const existingConversations = await Conversation.find({
            $or: [
              {
                userIds: {
                  $all: [currentUser.id, userId]
                }
              },
              {
                userIds: {
                  $all: [userId, currentUser.id]
                }
              }
            ]
        }).populate("users")

        const singleConversation = existingConversations[0]

        if (singleConversation){
            return NextResponse.json(singleConversation)
        }

      const newConversation = await Conversation.create({
        users: [currentUser.id, userId],
        userIds: [currentUser.id, userId],
      });
    
      const populatedConversation = await Conversation.findById(newConversation._id).populate('users').exec();
    

      return NextResponse.json(populatedConversation)

    } catch (error : any) {
        console.log(error)
        return new NextResponse("Internal Error",{status:500})
    }
}