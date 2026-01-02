const admin = require('../config/firebase');

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split('Bearer ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "No token provided" });
  }

  try {
    // Verify the token with Firebase
    const decodedToken = await admin.auth().verifyIdToken(token);
    
    // Attach the decoded user info to the request object
    req.user = decodedToken; 
    next();
  } catch (error) {
    console.error("Token Verification Error:", error.message);
    res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

module.exports = verifyToken;