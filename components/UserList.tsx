"use client"
import UserBox from "./UserBox"

import { UserInterface } from "@/common.types"


const UserList = ({users}:{users:any}) => {
  return (
    <aside
        className="  
            fixed 
            inset-y-0 
            pb-20
            lg:pb-0
            lg:left-20 
            lg:w-80 
            lg:block
            overflow-y-auto 
            border-r 
            border-black
            block w-full left-0
            bg-gray-800
        "
    >
        <div className="px-5">
            <div className="flex-col">
                <div 
                    className="
                        text-2xl 
                        font-bold 
                        text-neutral-200
                        py-4
                    "
                >
                    People
                </div>
            </div>
            {users?.map((user: any)=>(
                <UserBox
                    key={user.id}
                    data={user}
                />
            ))}
        </div>
    </aside>
  )
}

export default UserList