const mongoose = require('mongoose');

// Replace 'your_database_name' with the actual name of your database
const databaseName = 'f8_education';
const MongoDb_url = `mongodb+srv://hongtanphuc8:x8NXGQjXIbJRgt0m@hongphuc.fdnsfuo.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

async function connect() {
  try {
    await mongoose.connect(MongoDb_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB database: ${databaseName}`);
    // You can perform database operations here
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  }
}

module.exports = { connect };
