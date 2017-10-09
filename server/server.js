// NPM Modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Local imports
var { mongoose } = require('./db/mongoose.js');
var { Post } = require('./models/post.js');
var { User } = require('./models/user.js');

const app = express();
const PORT = process.env.PORT || 5000;

/*** Middleware ***/

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Parse the body of any request into JSON
app.use(bodyParser.json());

/*** Endpoints ***/

// Create a Post
app.post('/posts', (req, res) => {
  let post = new Post({
    videoId: req.body.videoId,
    userId: req.body.userId,
    text: req.body.text
  });

  post.save().then(
    doc => {
      res.send(doc);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

app.get('/posts', (req, res) => {
    Post.find().then((posts) => {
        res.send({posts});
    }, (err) => {
        res.status(400).send(err);
    });
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

/*** Start the server ***/

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = { app };
