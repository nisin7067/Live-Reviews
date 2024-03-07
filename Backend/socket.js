const socketIo = require('socket.io');
const Review = require('./models/Review');

module.exports = (server) => {
  const io = socketIo(server);

  io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });

    socket.on('addReview', async (reviewData) => {
      const review = new Review(reviewData);
      try {
        await review.save();
        io.emit('reviewAdded', review);
      } catch (err) {
        console.error(err);
      }
    });

    socket.on('editReview', async ({ id, ...updatedReview }) => {
      try {
        await Review.findByIdAndUpdate(id, updatedReview);
        io.emit('reviewEdited', { id, ...updatedReview });
      } catch (err) {
        console.error(err);
      }
    });

    socket.on('deleteReview', async (id) => {
      try {
        await Review.findByIdAndDelete(id);
        io.emit('reviewDeleted', id);
      } catch (err) {
        console.error(err);
      }
    });
  });
};
