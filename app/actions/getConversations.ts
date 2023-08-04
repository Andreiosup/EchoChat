import Conversation from "@/models/conversation"
import getCurrentUser from "./getCurrentUser"
import { ConversationInterface } from "@/common.types"

const getConversations = async () => {
    const currentUser = await getCurrentUser()
    
    if(!currentUser?._id) return []

    try {
        const conversations = await Conversation.find({
            userIds: { $in: [currentUser.id] },
        }).sort({ lastMessageAt: 'desc' })
        .populate({
            path: 'users',
            model: 'User',
        })
        // .populate({
        //     path: 'messages',
        //     populate: {
        //     path: 'sender seen',
        //     model: 'Message',
        //     },
        // });

        return conversations
    } catch (error: any) {
        console.log(error)
        return []
    }
}
export default getConversations