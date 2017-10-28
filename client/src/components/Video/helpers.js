const calculateTimeElapsed = dateString => {
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
    if (monthsElapsed === 1) {
      return "1 day ago";
    }
    return `${daysElapsed} days ago`;
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

module.exports = {
  calculateTimeElapsed
};
