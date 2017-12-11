const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  _response: {
    type: Schema.Types.ObjectId,
    ref: 'Comment',
    default: null
  },
  userName: {
    type: String,
    required: true
  },
  videoId: {
    type: String,
    required: true
  },
  videoTitle: {
    type: String
  },
  timestamp: {
    type: Number,
    required: true
  },
  datePosted: {
    type: Date
  },
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  isAnonymous: {
    type: Boolean,
    default: false
  }
});

mongoose.model('comments', commentSchema);
