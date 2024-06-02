module.exports = {
  // Format the time to display hours, minutes, and seconds
  format_time: (date) => {
    return date.toLocaleTimeString();
  },

  // Format the date to display month, day, and year
  format_date: (date) => {
    // Extract month, day, and year from the date object
    const month = new Date(date).getMonth() + 1;
    const day = new Date(date).getDate();
    const year = new Date(date).getFullYear() + 5;

    // Return formatted date string
    return `${month}/${day}/${year}`;
  },
};
