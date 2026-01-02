const Post = require('../models/Post');
const User = require('../models/User');

exports.createPost = async (req, res) => {
  try {
    const { title, content, tags, mediaUrl } = req.body;

    const firebaseUid = req.user.uid; 

    const user = await User.findOne({ firebaseUid });

    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: "User profile not found in database. Please sync first." 
      });
    }

    const newPost = await Post.create({
      author: user._id, 
      title,
      content,
      tags: tags || [],
      mediaUrl: mediaUrl || ""
    });

    res.status(201).json({
      success: true,
      message: "Talk posted successfully!",
      post: newPost
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create post.",
      error: error.message
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('author', 'displayName photoURL') 
      .sort({ createdAt: -1 }); // Newest posts first

    res.status(200).json({
      success: true,
      count: posts.length,
      posts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch posts.",
      error: error.message
    });
  }
};


exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('author', 'displayName photoURL');

    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found." });
    }

    res.status(200).json({ success: true, post });
  } catch (error) {
    res.status(500).json({ success: false, message: "Invalid Post ID format." });
  }
};


exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    
    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found." });
    }

    res.status(200).json({ success: true, message: "Post deleted successfully." });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};