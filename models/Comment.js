const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  _response: {
    type: Schema.Types.ObjectId,
    ref: "Comment",
    default: null
  },
  userName: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  videoId: {
    type: String,
    required: true
  },
  timestamp: {
    type: Number,
    required: true
  },
  datePosted: {
    type: Date
  },
  lastResponded: {
    type: Date
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
  },
  isAnonymous: {
    type: Boolean,
    default: false
  }
});

mongoose.model("comments", commentSchema);
