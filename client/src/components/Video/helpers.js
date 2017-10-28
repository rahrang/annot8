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
      return "1 year ago";
    }
    return `${yearsElapsed} years ago`;
  }

  let monthsElapsed = now.getUTCMonth() - date.getUTCMonth();
  if (monthsElapsed > 0) {
    if (monthsElapsed === 1) {
      return "1 month ago";
    }
    return `${monthsElapsed} months ago`;
  }

  let daysElapsed = now.getUTCDate() - date.getUTCDate();
  if (daysElapsed > 0) {
    if (daysElapsed === 1) {
      return "1 day ago";
    }
    return `${daysElapsed} days ago`;
  }

  let hoursElapsed = now.getUTCHours() - date.getUTCHours();
  if (hoursElapsed > 0) {
    if (hoursElapsed === 1) {
      return "1 hour ago";
    }
    return `${hoursElapsed} hours ago`;
  }

  let minutesElapsed = now.getUTCMinutes() - date.getUTCMinutes();
  if (minutesElapsed > 0) {
    if (minutesElapsed === 1) {
      return "1 minute ago";
    }
    return `${minutesElapsed} minutes ago`;
  }

  return "Just Now";
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
  let hoursElapsed = Math.floor(timestamp / 3600); // 3600 seconds in an hour
  let secondsRemaining = timestamp % 3600;
  let minutesElapsed = Math.floor(secondsRemaining / 60);
  let secondsElapsed = secondsRemaining % 60;
  return { hoursElapsed, minutesElapsed, secondsElapsed };
};

const formatTime = (timestamp, upperBound) => {
  let videoContainsHours = upperBound % 3600 > 0;
  let timeObject = convertSecondsToTime(timestamp);
  let { hoursElapsed, minutesElapsed, secondsElapsed } = timeObject;

  let hours = hoursElapsed < 10 ? `0${hoursElapsed}` : `${hoursElapsed}`;
  let minutes =
    minutesElapsed < 10 ? `0${minutesElapsed}` : `${minutesElapsed}`;
  let seconds =
    secondsElapsed < 10 ? `0${secondsElapsed}` : `${secondsElapsed}`;
  if (videoContainsHours) {
    return `${hours}:${minutes}:${seconds}`;
  }
  return `${minutes}:${seconds}`;
};

const truncate = text => {
  let textArray = text.split("");
  let truncatedArray = textArray.slice(0, 40);
  truncatedArray.push(".");
  truncatedArray.push(".");
  truncatedArray.push(".");
  let newText = truncatedArray.join("");
  return newText;
};

module.exports = {
  getTimeElapsed,
  getTimeBoundaries,
  convertSecondsToTime,
  formatTime,
  truncate
};
