const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firebaseUid: { 
    type: String, 
    required: true, 
    unique: true // Crucial for linking with Firebase
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true 
  },
  displayName: { type: String, required: true },
  photoURL: { type: String, default: "" },
  bio: { type: String, maxlength: 250, default: "Tech enthusiast." },
  techStack: [{ type: String }], // Array of strings for tech interests
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);