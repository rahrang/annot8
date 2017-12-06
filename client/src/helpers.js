const _ = require('lodash');

/***
  @param dateString: the date & time at which the comment was made
  @return: the number of years/months/days/minutes passed since the comment was made
*/
const getTimeElapsed = dateString => {
  let now = new Date();
  let date = new Date(dateString);

  let yearsElapsed = now.getYear() - date.getYear();
  if (yearsElapsed > 0) {
    if (yearsElapsed === 1) {
      return '1 year ago';
    }
    return `${yearsElapsed} years ago`;
  }

  let monthsElapsed = now.getUTCMonth() - date.getUTCMonth();
  if (monthsElapsed > 0) {
    if (monthsElapsed === 1) {
      return '1 month ago';
    }
    return `${monthsElapsed} months ago`;
  }

  let daysElapsed = now.getUTCDate() - date.getUTCDate();
  if (daysElapsed > 0) {
    if (daysElapsed === 1) {
      return '1 day ago';
    }
    return `${daysElapsed} days ago`;
  }

  let hoursElapsed = now.getUTCHours() - date.getUTCHours();
  if (hoursElapsed > 0) {
    if (hoursElapsed === 1) {
      return '1 hour ago';
    }
    return `${hoursElapsed} hours ago`;
  }

  let minutesElapsed = now.getUTCMinutes() - date.getUTCMinutes();
  if (minutesElapsed > 0) {
    if (minutesElapsed === 1) {
      return '1 minute ago';
    }
    return `${minutesElapsed} minutes ago`;
  }
  return 'Just Now';
};

/***
  @param timestamp: the timestamp at which the user commented, in seconds
  @param duration: the number of seconds the comment should display before/after the timestamp
  @param upperBound: the length of the video, in seconds
*/
const getTimeBoundaries = (timestamp, duration, upperBound) => {
  let min = Math.max(0, timestamp - duration);
  let max = Math.min(timestamp + duration, upperBound);
  return [min, max];
};

/***
  @param timestamp: the timestamp at which the user commented, in seconds
  @return: the timestamp converted to hours/minutes/seconds 
*/
const convertSecondsToTime = timestamp => {
  let hours = Math.floor(timestamp / 3600); // 3600 seconds in an hour
  let secondsRemaining = timestamp % 3600;
  let minutes = Math.floor(secondsRemaining / 60);
  let seconds = secondsRemaining % 60;
  return { hours, minutes, seconds };
};

const stringifyTime = timestamp => {
  let { hours, minutes, seconds } = convertSecondsToTime(timestamp);
  hours = addZeroChar(hours);
  minutes = addZeroChar(minutes);
  seconds = addZeroChar(seconds);
  return { hours, minutes, seconds };
};

const addZeroChar = num => {
  return num < 10 ? `0${num}` : _.toString(num);
};

const convertTimeToSeconds = (hours, minutes, seconds) => {
  console.log(hours, minutes, seconds);
  let hoursInSeconds = !_.isNaN(hours) ? _.toInteger(hours) * 3600 : 0;
  let minutesInSeconds = !_.isNaN(minutes) ? _.toInteger(minutes) * 60 : 0;
  let secondsInSeconds = !_.isNaN(seconds) ? _.toInteger(seconds) : 0;
  let timeInSeconds = hoursInSeconds + minutesInSeconds + secondsInSeconds;
  return timeInSeconds;
};

const formatTime = (timestamp, upperBound = 0) => {
  let videoContainsHours = Math.floor(upperBound / 3600) > 0;
  let { hours, minutes, seconds } = convertSecondsToTime(timestamp);
  let hoursFormatted = addZeroChar(hours);
  let minutesFormatted = addZeroChar(minutes);
  let secondsFormatted = addZeroChar(seconds);
  if (videoContainsHours) {
    return `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;
  }
  return `${minutesFormatted}:${secondsFormatted}`;
};

// const truncate = text => {
//   if (text.length < 40) {
//     return text;
//   }
//   let textArray = text.split("");
//   let truncatedArray = textArray.slice(0, 40);
//   truncatedArray.push("...");
//   let newText = truncatedArray.join("");
//   return newText;
// };

module.exports = {
  getTimeElapsed,
  getTimeBoundaries,
  stringifyTime,
  convertTimeToSeconds,
  formatTime
};
