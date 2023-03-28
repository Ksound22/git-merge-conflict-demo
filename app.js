function addNumbers(a, b, c) {
  return a + b + c;
}

console.log(addNums(2, 8));

function subtractNums(a, b) {
  return a - b;
  // This line wont be reached
  // I can't reach this line
}

console.log('This line');
console.log(subtractNums(8, 2));

// some more addition to new-feature
