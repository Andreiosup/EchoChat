// Represents the structure of a User model
export interface UserInterface {
    id: string;
    name: string;
    email: string;
    emailVerified: Date;
    image: string;
    hashedPassword: string;
    createdAt: Date;
    updatedAt: Date;
  
    conversationIds: ConversationInterface[];
    conversations: ConversationInterface[];
  
    seenMessageIds: MessageInterface[];
    seenMessages: MessageInterface[];
  
    accounts: AccountInterface[];
    messages: MessageInterface[];
  }
  
  // Represents the structure of an Account model
  export interface AccountInterface {
    id: string;
    userId: UserInterface;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token: string;
    access_token: string;
    expires_at: number;
    token_type: string;
    scope: string;
    id_token: string;
    session_state: string;
  
    user: UserInterface;
  }
  
  // Represents the structure of a Conversation model
  export interface ConversationInterface {
    id: string;
    createdAt: Date;
    lastMessageAt: Date;
    name: string;
    isGroup: boolean;
  
    messagesIds: MessageInterface[];
    messages: MessageInterface[];
  
    userIds: UserInterface[];
    users: UserInterface[];
  }
  
  // Represents the structure of a Message model
  export interface MessageInterface {
    id: string;
    body: string;
    image: string;
    createdAt: Date;
  
    seenIds: UserInterface[];
    seen: UserInterface[];
  
    conversationId: ConversationInterface;
    conversation: ConversationInterface;
  
    senderId: UserInterface;
    sender: UserInterface;
  }
  