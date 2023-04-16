/** @format */
// const num = 8;

function myFunc(num) {
  if (num >= 11) {
    console.log("High");
  } else if (num <= 3) {
    console.log("Low");
  } else if (num == 7) {
    console.log("Exact");
  } else {
    console.log("Medium");
  }
}
myFunc(num);

// task 2
/*
### **Challenge #2**

Write a short program that does the following:

- Loops from 1 to 30 (inclusive)
- If the number is below 10, display a `.`
- If the number is between 10 and 20, display an `x`
- If the number is above 20, display an `X`

 ~5 minutes to complete the challenge.
 */

for (let i = 1; i < 30; i++) {
  if (i < 10) {
    console.log(".");
  } else if (i < 20) {
    console.log("x");
  } else {
    console.log("X");
  }
}
/**
### **Challenge #3**

Write a function named `farewell` that does the following:

- Accepts a single argument, `name`
- Returns the string `"Goodbye forever, "` + `name`

Examples:

- `farewell("Nancy")` -> "Goodbye forever, Nancy"
- `farewell("Bertrand")` -> "Goodbye forever, Bertrand"

~5 minutes to complete the challenge.
 */

function farewell(name) {
  //return " Goodbye forever " + name;
  return `Goodbye forever ${name}`;
}
console.log(farewell("Nancy"));
