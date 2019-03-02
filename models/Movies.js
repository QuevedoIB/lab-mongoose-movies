const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/movies', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const moviesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String
  },
  plot: {
    type: String
  }
});

const Movies = mongoose.model('movies', moviesSchema);

module.exports = Movies;
