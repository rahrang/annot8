const keys = require('../config/keys.js');
const _ = require('lodash');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(keys.googleAPIKey);

module.exports = app => {
  // GET the title and duration for a video with the given id
  app.post('/api/video/stats', async (req, res) => {
    const { videoId } = req.body;
    console.log(videoId);
    youtube
      .getVideo(`https://www.youtube.com/watch?v=${videoId}`)
      .then(results => console.log(results))
      .catch(results => console.log(results));
    // const video = await youtube.getVideo(
    //   `https://www.youtube.com/watch?v=${videoId}`
    // );
    // console.log('HERE');
    // if (video) {
    //   const title = video[0].title;
    //   const duration = video[0].duration;
    //   return res.status(200).send({ title, duration });
    // }
    return res.status(422).send({ title: '', duration: '' });
  });
};

// TODO
