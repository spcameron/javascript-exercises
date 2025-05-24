const sumAll = function (a, b) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    a < 0 ||
    b < 0 ||
    a - Math.floor(a) !== 0 ||
    b - Math.floor(b) !== 0
  ) {
    return "ERROR";
  }

  let start, end;

  if (a < b) {
    start = a;
    end = b;
  } else {
    start = b;
    end = a;
  }

  let totalSum = 0;
  for (let i = start; i <= end; i++) {
    totalSum += i;
  }
  return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
