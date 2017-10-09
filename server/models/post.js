var mongoose = require('mongoose');

var Post = mongoose.model('Post', {
  // timestamp: {}, // or we can use the built-in ObjectId from Mongo
  videoId: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
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
  responseId: {
    type: String,
    default: null
  }
});

module.exports = { Post };

/*
    var newPost = new Post({
        timestamp: new moment().now(),
        user: 'Rahul',
        text: 'This is a post',
        isPublic: true,
        isQuestion: false,
        isResolved: true
    })

    newPost.save().then((doc) => {
        console.log('saved post', doc);
    }, (err) => {
        console.log('unable to save post', err);
    });
*/
