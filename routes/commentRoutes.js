const Path = require("path-parser");
const mongoose = require("mongoose");

// Middlewares
const requireLogin = require("../middlewares/requireLogin.js");

// MongoDB Collections
const Comment = mongoose.model("comments");

module.exports = app => {
  // GET all comments on a video
  app.get("/api/video/comments/", async (req, res) => {
    const p = new Path("/api/video/comments?:videoId");
    const match = p.test(req.url);
    if (match) {
      const comments = await Comment.find({ videoId: match.videoId });
      res.status(200).send(comments);
    }
  });

  // GET all comments for User
  app.get("/api/user/comments", requireLogin, async (req, res) => {
    const comments = await Comment.find({ _user: req.user.id });
    res.status(200).send(comments);
  });

  // GET all comments for User on a video
  app.get("/api/user/video/comments/", requireLogin, async (req, res) => {
    const p = new Path("/api/user/video/comments?:videoId");
    const match = p.test(req.url);

    if (match) {
      const comments = await Comment.find({
        _user: req.user.id,
        videoId: match.videoId
      });
      res.status(200).send(comments);
    }
  });

  // GET all timestamps on a video

  // GET all unresolved comments on a video

  // GET all questions on a video

  // GET all private comments on a video

  // POST a new commment on a video
  app.post("/api/video/comments/", requireLogin, async (req, res) => {
    const { videoId, timestamp, userName, isAnonymous, text } = req.body;
    const comment = new Comment({
      videoId,
      timestamp,
      userName,
      isAnonymous,
      text,
      _user: req.user.id,
      datePosted: Date.now()
    });

    try {
      await comment.save();
      res.send(req.user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
