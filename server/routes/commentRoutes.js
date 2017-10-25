// NPM Modules
const _ = require('lodash');
const Path = require('path-parser');
const URL = require('url');
const mongoose = require('mongoose');

// Middlewares
const requireLogin = require('../middlewares/requireLogin.js');

// MongoDB Collections
const Comment = mongoose.model('comments');

module.exports = app => {

  // GET all comments on a video
  app.get('/api/comments/video/:videoId', async (req, res) => {
    const { videoId } = req.body; 
    const comments = await Comment.find({ videoId });
    res.send(comments);
  });

  // GET all posts for User
  app.get('/api/comments/user', requireLogin, async (req, res) => {
    const comments = await Comment.find({ _user: req.user.id });
    res.send(comments);
  });

  // GET all posts for User on a video
  app.get('/api/comments/user/video/:videoId', requireLogin, async (req, res) => {
    const { videoId } = req.body;
    const comments = await Comment.find({ _user: req.user.id, videoId });
    res.send(comments);
  });

  // GET all timestamps on a video

  // GET all unresolved comments on a video

  // GET all questions on a video

  // GET all private comments on a video

  // POST a new commment on a video
  app.post('/api/comments/video/:videoId', requireLogin, (req, res) => {
    const { text, videoId } = req.body;

    const comment = new Comment({
      text,
      videoId, 
      _user: req.user.id,
      datePosted: Date.now()
    });

    try {
      comment.save();
      res.send(req.user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

};