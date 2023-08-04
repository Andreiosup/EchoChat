"use client"

const EmptyState = () => {
  return (
    <div 
      className="
        px-4 
        py-10 
        sm:px-6 
        h-full 
        flex 
        justify-center 
        items-center 
        bg-gray-900
        text-gray-100
      "
    >
      <div className="text-center items-center flex flex-col">
        <h3 className="mt-2 text-2xl font-semibold">
            Select a chat or start a new conversation
        </h3>
      </div>  
    </div>
  )
}

export default EmptyState