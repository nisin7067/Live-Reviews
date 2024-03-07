const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketIO = require('socket.io');
const reviewRoutes = require('./routes/reviewRoutes');
const configureSocket = require('./socket');

const app = express();
const cors = require('cors');
app.use(cors());

const server = http.createServer(app);
const io = socketIO(server);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/reviews', { useNewUrlParser: true, useUnifiedTopology: true });

// Listen for the connected event
mongoose.connection.once('connected', () => {
  console.log('MongoDB connection successful');
  // Add your success message display logic here
});

// Listen for any error
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// SocketIO setup
configureSocket(server);

// Middleware
app.use(express.json());

// Routes
app.use('/api', reviewRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
