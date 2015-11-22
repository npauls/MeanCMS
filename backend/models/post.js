var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: { type: Date, default: Date.now } }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

module.exports = mongoose.model('Post', Post);