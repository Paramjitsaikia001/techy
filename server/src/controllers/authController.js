const User = require('../models/User');
exports.syncUser = async (req, res) => {
  try {
  
    const { uid, email, name, picture } = req.user; 
    let user = await User.findOne({ firebaseUid: uid });

    if (user) {
      user.displayName = name || user.displayName;
      user.photoURL = picture || user.photoURL;
      await user.save();

      return res.status(200).json({
        success: true,
        message: "User session synced successfully.",
        user
      });
    }

    user = await User.create({
      firebaseUid: uid,
      email: email,
      displayName: name || "Tech Talker",
      photoURL: picture || "",
      techStack: [],
      bio: "Hello! I'm new to Tech Talk." 
    });

    res.status(201).json({
      success: true,
      message: "New user account created in database.",
      user
    });

  } catch (error) {
    console.error("Auth Sync Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error during user sync.",
      error: error.message
    });
  }
};


exports.logout = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Logged out from server successfully."
  });
};