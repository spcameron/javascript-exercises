const leapYears = function (year) {
  let isLeapYear;

  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 !== 0) {
      isLeapYear = false;
    } else {
      isLeapYear = true;
    }
  } else {
    isLeapYear = false;
  }

  return isLeapYear;
};

// given solution's logic

const leapYears = function (year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
