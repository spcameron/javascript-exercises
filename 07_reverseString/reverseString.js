const reverseString = function (str) {
  // one-liner
  return str.split("").reverse().join("");

  // manually with loop
  arr = str.split("");
  newStr = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    newStr += arr[i];
  }
  return newStr;
};

// Do not edit below this line
module.exports = reverseString;
