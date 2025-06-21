const fibonacci = function(n) {
  if (n < 0) {
    return "OOPS"
  }

  let a = 1;
  let b = 0;

  for (let i = 0; i < n; i++) {
    let next = a + b;
    b = a;
    a = next;
  }

  return b;
};

// Do not edit below this line
module.exports = fibonacci;
