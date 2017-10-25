const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  // timestamp: {}, // or we can use the built-in ObjectId from Mongo
  // _video: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Video'
  // },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  _response: {
    type: Schema.Types.Post,
    ref: 'Post',
  },
  videoId: {
    type: String,
    required: true,
  },
  datePosted: {
    type: Date
  },
  lastResponded: {
    type: Date,
  }, 
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  isPublic: {
    type: Boolean,
    default: true
  },
  isQuestion: {
    type: Boolean,
    default: true
  },
  isResolved: {
    type: Boolean,
    default: false
  }
});

mongoose.model('posts', postSchema);

module.exports = { Post };