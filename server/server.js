require('dotenv').config(); 
const app = require('./src/app'); 
const connectDB = require('./src/config/db'); 

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB(); 

    app.listen(PORT, () => {
      console.log(`
 Tech Talk Backend Running!
 Port: ${PORT}
  Mode: ${process.env.NODE_ENV || 'development'}
 Database: Connected
      `);
    });
  } catch (error) {
    console.error(` Fatal Error starting server: ${error.message}`);
    process.exit(1);
  }
};

startServer();