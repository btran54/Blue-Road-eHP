const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const MONGODB_URI = 'mongodb+srv://btran54:7goASFZKmunvmrdr@cluster0.3tvpu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

// Define routes here
app.use('/api', require('./routes/testRoute'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});