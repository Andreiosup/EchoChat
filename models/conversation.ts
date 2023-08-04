import { Schema, model, models } from 'mongoose';

const conversationSchema = new Schema({
    createdAt: { type: Date, default: Date.now },
    lastMessageAt: { type: Date, default: Date.now },
    name: String,
    isGroup: Boolean,
  
    messagesIds: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
  
    userIds: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const Conversation = models.Conversation || model("Conversation", conversationSchema);

export default Conversation;