
import { connectToDB } from "@/utils/database"
import getCurrentSession from "./getCurrentSession"
import User from "@/models/user"

const getUsers = async () =>{
    try {
        const session = await getCurrentSession()

        if (!session?.user?.email) return null

        await connectToDB()

        const users = await User.find({
            email: { $ne: session.user.email },
          })
            .sort({ createdAt: 'desc' })
            .exec();

        if (!users) return null

        return users
    } catch (error) {
        return null
    }
}
export default getUsers