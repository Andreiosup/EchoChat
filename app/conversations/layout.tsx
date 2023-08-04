import Sidebar from "@/components/sidebar/Sidebar";
import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";
import ConversationList from "@/components/ConversationList";


export default async function ConversationsLayout({
  children
}: {
  children: React.ReactNode,
}) {
  const conversations = await getConversations();

  return (
    
    <Sidebar>
      <div className="h-full">
        <ConversationList 
          initialItems={conversations}
        />
        {children}
      </div>
    </Sidebar>
  );
}