const keys = require('../config/keys.js');
const _ = require('lodash');
const axios = require('axios');

const parse = require('iso8601-duration').parse;
const toSeconds = require('iso8601-duration').toSeconds;

module.exports = app => {
  app.post('/api/video/stats', async (req, res) => {
    const { videoId } = req.body;
    const query = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?key=${keys.googleAPIKey}&part=contentDetails,snippet&id=${videoId}`
    );
    if (_.isEmpty(query.data.items)) {
      res.status(422).send({ title: '', duration: '-1' });
    } else {
      const videoData = query.data.items[0];
      let title = videoData.snippet.title;
      let rawDuration = videoData.contentDetails.duration;
      let cleanedDuration = cleanDuration(rawDuration);
      res.status(200).send({ title: title, duration: cleanedDuration });
    }
  });
};

// YouTube's Data API returns raw durations in ISO 8601 format
// We need to clean this data --> convert it into seconds
// "PT2H7M37S" ==> "7657"
// "PT7M37S" ==> "457"
const cleanDuration = rawDuration => {
  return toSeconds(parse(rawDuration));
};
