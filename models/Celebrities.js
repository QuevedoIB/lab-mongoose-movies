const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/movies', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const celebritiesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    default: 'unknown'
  },
  catchPhrase: {
    type: String,
    required: true
  }
});

const Celebrities = mongoose.model('celebrities', celebritiesSchema);

module.exports = Celebrities;
