const User = require('../models/User');
exports.getUserProfile = async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await User.findOne({ firebaseUid: uid })
      .populate('followers', 'displayName photoURL')
      .populate('following', 'displayName photoURL');

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { bio, techStack, displayName } = req.body;
    const firebaseUid = req.user.uid; // Secured via middleware

    const updatedUser = await User.findOneAndUpdate(
      { firebaseUid },
      { $set: { bio, techStack, displayName } },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.followUser = async (req, res) => {
  try {
    const targetUserId = req.params.targetUserId;
    const myFirebaseUid = req.user.uid;

    const me = await User.findOne({ firebaseUid: myFirebaseUid });
    
    if (me._id.toString() === targetUserId) {
      return res.status(400).json({ success: false, message: "You cannot follow yourself" });
    }

    // Add target to my 'following' and me to target's 'followers'
    await User.findByIdAndUpdate(me._id, { $addToSet: { following: targetUserId } });
    await User.findByIdAndUpdate(targetUserId, { $addToSet: { followers: me._id } });

    res.status(200).json({ success: true, message: "Successfully followed user" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.unfollowUser = async (req, res) => {
  try {
    const targetUserId = req.params.targetUserId;
    const myFirebaseUid = req.user.uid;

    const me = await User.findOne({ firebaseUid: myFirebaseUid });

    // Remove target from my 'following' and me from target's 'followers'
    await User.findByIdAndUpdate(me._id, { $pull: { following: targetUserId } });
    await User.findByIdAndUpdate(targetUserId, { $pull: { followers: me._id } });

    res.status(200).json({ success: true, message: "Successfully unfollowed user" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};