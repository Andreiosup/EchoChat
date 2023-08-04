import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    emailVerified: Date,
    image: String,
    hashedPassword: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  
    conversationIds: [{ type: Schema.Types.ObjectId, ref: 'Conversation' }],
    conversations: [{ type: Schema.Types.ObjectId, ref: 'Conversation' }],
  
    seenMessageIds: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
    seenMessages: [{ type: Schema.Types.ObjectId, ref: 'Message', refPath: 'seen' }],
  
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
});

const User = models.User || model("User", userSchema);

export default User;