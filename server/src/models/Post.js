const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true // Links the talk to a specific user profile
  },
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true },
  tags: [{ type: String }], // e.g., ['Nodejs', 'Web3', 'AI']
  mediaUrl: { type: String }, // For images/videos (Cloudinary/S3 link)
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  commentCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true }); // Automatically adds updatedAt and createdAt fields

module.exports = mongoose.model('Post', PostSchema);