import { redirect } from "next/navigation";


import Image from 'next/image'
import AuthForm from "@/components/auth/AuthForm";

interface UseUserT {
  isLoaded: boolean;
  isSignedIn: boolean;
  user: { id: string };
}

export default function Home() {

  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8  bg-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-m">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight  text-gray-200 ">
          Sign in to{" "}
          <span className="orange_gradient">
            EchoChat 
          </span>
          <AuthForm/>    
        </h2>
      </div>
    </div>
  )
}
