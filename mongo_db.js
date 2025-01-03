const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_URL


const connectMongoDb = async () => {
  try {
    await mongoose.connect(mongo_url, {
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); 
  }
};

module.exports = connectMongoDb;
