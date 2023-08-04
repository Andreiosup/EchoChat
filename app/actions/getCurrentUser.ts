
import { connectToDB } from "@/utils/database"
import getCurrentSession from "./getCurrentSession"
import User from "@/models/user"

const getCurrentUser = async () =>{
    try {
        const session = await getCurrentSession()

        if (!session?.user?.email) return null

        await connectToDB()

        const currentUser= User.findOne({
            email:session.user.email
        }).sort({ lastMessageSent: 'desc'})

        if (!currentUser) return null

        return currentUser
    } catch (error) {
        return null
    }
}
export default getCurrentUser