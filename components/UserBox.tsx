"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { useCallback, useState } from "react"
import Avatar from "./Avatar"
import { Schema } from 'mongoose';

// Define the interface for the user data

const UserBox = ({ data }: { data: any }) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const handleClick = useCallback(async () => {
        setLoading(true)

        try {
            const response = await axios.post('/api/conversations', { userId: data._id });
    
            router.push(`/conversations/${response.data._id}`);
        }
        finally {
            setLoading(false);
        }
    }, [])

    return (
        <div
            className="
                w-full 
                relative 
                flex 
                items-center 
                space-x-3 
                text-white
                p-3 
                hover:bg-gray-700
                rounded-lg
                transition
                cursor-pointer
            "
            onClick={handleClick}
        >
            <Avatar user={data} />
            <div className="min-w-0 flex-1 hover:text-orange-600">
                <div className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <div className="flex justify-between items-center mb-1">
                        <p className="text-sm font-medium">
                            {data.name}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserBox