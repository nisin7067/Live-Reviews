const Review = require('../models/Review');

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ datetime: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createReview = async (req, res) => {
  const review = new Review(req.body);
  try {
    await review.save();
    res.status(201).end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateReview = async (req, res) => {
  const { id } = req.params;
  try {
    await Review.findByIdAndUpdate(id, req.body);
    res.status(200).end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteReview = async (req, res) => {
  const { id } = req.params;
  try {
    await Review.findByIdAndDelete(id);
    res.status(200).end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
