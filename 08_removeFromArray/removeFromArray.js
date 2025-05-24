// my solution, I keep doing things manually rather than using built-in methods
const removeFromArray = function (arr, target) {
  const targets = [...arguments];
  for (let i = 0; i < arr.length; i++) {
    if (targets.includes(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

// given solution
const removeFromArray = function (array, ...args) {
  const newArray = [];
  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// one-liner
const removeFromArray = function (array, ...args) {
  return array.filter((val) => !args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
