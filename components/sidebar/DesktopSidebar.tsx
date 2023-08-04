"use client"

import useRoutes from '@/hooks/useRoutes'
import React, { useState } from 'react'
import DesktopItem from './DesktopItem'
import { Date } from 'mongoose';
import Avatar from '../Avatar';


type User = {
  _id: string; // Assuming ObjectId is represented as a string
  name: string;
  email: string;
  hashedPassword: string;
  conversationIds: string[];
  conversations: any[]; // Assuming conversation objects have a specific type
  seenMessageIds: string[];
  seenMessages: any[]; // Assuming seen message objects have a specific type
  accounts: any[]; // Assuming account objects have a specific type
  messages: any[]; // Assuming message objects have a specific type
  createdAt: Date; // Assuming createdAt is represented as a string
  updatedAt: Date; // Assuming updatedAt is represented as a string
  __v: number;
};

const DesktopSidebar = ({ currentUser }: { currentUser: User }) => {
  const [isOpen, setIsOpen] = useState(false)
  const routes = useRoutes()
  return (
    <>
      <div className="
        hidden 
        lg:fixed 
        lg:inset-y-0 
        lg:left-0 
        lg:z-40 
        lg:w-20
        xl:px-6
        lg:overflow-y-auto 
        lg:bg-gray-900
        lg:border-r-[1px]
        lg:border-black
        lg:pb-4
        lg:flex
        lg:flex-col
        justify-between
      ">
        <nav className="mt-4 flex flex-col justify-between">
          <ul role="list" className="flex flex-col items-center space-y-1">
            {routes.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                onClick={item?.onClick}
              />
            ))}
          </ul>
        </nav >
        <nav className="mt-4 flex flex-col justify-between items-center">
          <div className="cursor-pointer hover:opacity-75 transition" onClick={() => setIsOpen(true)}>
            <Avatar user={currentUser}/>
          </div>
        </nav>
      </div >
    </>
  )
}

export default DesktopSidebar