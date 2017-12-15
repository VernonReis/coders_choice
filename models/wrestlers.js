const mongoose = require('mongoose');

const wrestlerSchema = new mongoose.Schema({
  name: {type: String, required: true},
  title: {type: String},
  img: { type: String, default: 'https://media.giphy.com/media/qOnWoPxXnm0Vi/giphy.gif'}
})


module.exports = mongoose.model('Wrestler', wrestlerSchema);
