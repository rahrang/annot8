const Path = require('path-parser');
const mongoose = require('mongoose');
const _ = require('lodash');

// Middlewares
const requireLogin = require('../middlewares/requireLogin.js');

// MongoDB Collections
const Comment = mongoose.model('comments');

module.exports = app => {
  // GET all top-level comments on a video
  app.get('/api/video/comments/all', async (req, res) => {
    const p = new Path('/api/video/comments/all?:videoId');
    const match = p.test(req.url);
    if (match) {
      const comments = await Comment.find({ videoId: match.videoId }).sort({
        timestamp: 1,
        _id: 1
      });
      let filteredComments = getTopLevelComments(comments);
      res.status(200).send(filteredComments);
    }
  });

  // GET all comments on a video at a given timestamp
  app.get('/api/video/comments/timestamp', async (req, res) => {
    const p = new Path('/api/video/comments/timestamp?:videoId&:timestamp');
    const match = p.test(req.url);
    if (match) {
      const comments = await Comment.find({
        videoId: match.videoId,
        timestamp: match.timestamp
      }).sort({ _id: 1 });
      res.status(200).send(comments);
    }
  });

  // GET all comments for User
  app.get('/api/user/comments/', requireLogin, async (req, res) => {
    const comments = await Comment.find({ _user: req.user.id }).sort({
      datePosted: 1,
      _id: 1
    });
    res.status(200).send(comments);
  });

  // GET all comments for User on a video
  app.get('/api/user/video/comments/', requireLogin, async (req, res) => {
    const p = new Path('/api/user/video/comments?:videoId');
    const match = p.test(req.url);

    if (match) {
      const comments = await Comment.find({
        _user: req.user.id,
        videoId: match.videoId
      }).sort({
        _id: 1
      });
      res.status(200).send(comments);
    }
  });

  // POST a new commment on a video
  app.post('/api/video/comments/', requireLogin, async (req, res) => {
    const {
      videoId,
      videoTitle,
      timestamp,
      userName,
      isAnonymous,
      text
    } = req.body;
    const comment = new Comment({
      videoId,
      videoTitle,
      timestamp,
      userName,
      isAnonymous,
      text,
      _user: req.user.id,
      datePosted: Date.now()
    });

    try {
      await comment.save();
      const comments = await Comment.find({ videoId, timestamp }).sort({
        _id: 1
      });
      res.status(200).send(comments);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // DELETE a comment
  app.delete('/api/video/comments/', requireLogin, async (req, res) => {
    const p = new Path('/api/video/comments?:videoId&:commentId&:timestamp');
    const match = p.test(req.url);
    if (match) {
      await Comment.remove({ _id: match.commentId });
      const comments = await Comment.find({
        videoId: match.videoId,
        timestamp: match.timestamp
      }).sort({ _id: 1 });
      res.status(200).send(comments);
    }
  });
};

const getTopLevelComments = comments => {
  let timestamps = [];
  let commentsToReturn = [];
  comments.forEach(c => {
    if (!_.includes(timestamps, c.timestamp)) {
      timestamps.push(c.timestamp);
      commentsToReturn.push(c);
    }
  });
  return commentsToReturn;
};
