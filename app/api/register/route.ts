import User from "@/models/user"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"
import { connectToDB } from "@/utils/database"

export const POST = async (req:Request) => {
    try {
        const body = await req.json()
    
        const {email,name,password} = body

        await connectToDB();
    
        if (!email || !name || !password) {
            return new NextResponse("Missing info",{status:400})
        }
    
        const hashedPassword = await bcrypt.hash(password,12)
    
        const user = await User.create({
            email,
            name,
            hashedPassword
        })
    
        return NextResponse.json(user)
    } catch (error: any) {
        console.log(error,"[REGISTER_ERROR]")
        return new NextResponse("Internal error",{status:500})
    }
}