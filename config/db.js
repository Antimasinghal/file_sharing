const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/user';
    console.log('Connecting to:', dbURI); // Log the URI
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Connection failed:', error);
    process.exit(1);
  }
};

const app = express();

async function startServer() {
  try {
    await connectDB();

    app.get('/users', (req, res) => {
      res.send('hello');
    });

    app.listen(6000, () => {
      console.log('Listening on port 6000');
      console.log('APP_BASE_URL:', process.env.APP_BASE_URL || 'http://localhost:6001');
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
}

startServer();