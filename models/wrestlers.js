const mongoose = require('mongoose');

const wrestlerSchema = new mongoose.Schema({
  name: {type: String, required: true},
  title: {type: String},
  img: {type: String, default: 'https://thumbs.gfycat.com/FluffyIncompleteAmericanpainthorse-size_restricted.gif'}
})


module.exports = mongoose.model('Wrestler', wrestlerSchema);
