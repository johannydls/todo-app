const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const MONGO_URI = 'mongodb://localhost/todo';

module.exports = mongoose.connect(MONGO_URI, () => {
  console.log("Database connected");
})