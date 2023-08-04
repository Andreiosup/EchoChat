const mongoose = require('mongoose');

// Message Schema
const messageSchema = new mongoose.Schema({
  body: String,
  image: String,
  createdAt: { type: Date, default: Date.now },

  seenIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  seen: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', refPath: 'seenMessages' }],

  conversationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation', onDelete: 'cascade' },
  conversation: { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation', onDelete: 'cascade' },

  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', onDelete: 'cascade' },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', onDelete: 'cascade' },
});

const Message = mongoose.model('Message', messageSchema);