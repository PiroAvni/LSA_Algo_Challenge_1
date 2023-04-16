/** @format */

// task 1
console.log("-------------- Task 1 -------------------");
function capitalise(string) {
  let capString =
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  return capString;
}
console.log(capitalise("hEllo")); // "Hello"
console.log(capitalise("avGeroU")); //"avgerou";

console.log("-------------- Task 2 -------------------");

// Complete the function below
const swap2 = (word) => {
  let new_word = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      new_word += word[i].toUpperCase();
    } else {
      new_word += word[i].toLowerCase();
    }
    //console.log(word[i])
  }

  return { original: word, swapcased: new_word };
};
// console.log(swap2("hELLo"));
// // => { original: 'hELLo', swapcased: 'HellO' }
// console.log(swap2("betH"));
// // => { original: 'betH', swapcased: 'BETh' }
// console.log(swap2("jaGaN"));
// // => { original: 'jaGaN', swapcased: 'JAgAn' }
// console.log(swap2("sergI"));
// // => { original: 'sergI', swapcased: 'SERGi' }
// console.log(swap2("JournAl"));
// // => { original: 'JournAl', swapcased: 'jOURNaL' }
// console.log(swap2("lAfOSSEaCADEMY"));
// // => { original: 'lAfOSSEaCADEMY', swapcased: 'LaFosseAcademy' }
console.log("-------------- Task 3 -------------------");
function reverse(string) {
  let newString = "";
  /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, 
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return { original: string, NewString: newString };
}
console.log(reverse("olleh")); // "hello";
console.log(reverse("tpircSavaJ")); // "JavaScript"

console.log("-------------- Task 4 -------------------");

function reverse2(string) {
  let newString1 = "";
  for (let i in string) {
    newString1 = string[i] + newString1;
    // console.log(newString1);
  }
  return { original: string, NewString: newString1 };
}
console.log(reverse2("olleh")); // "hello";
console.log(reverse2("tpircSavaJ")); // "JavaScript"

console.log("-------------- Task 5 -------------------");

function upcase(array) {
  return array.forEach((array) => array.toUpperCase());
}

//console.log(upcase(["a", "b", "c", "d"])); // ["A", "B", "C", "D"]

console.log("-------------- Task 6 -------------------");

function downcase(array) {
  return array.map((element) => element.toLowerCase());
}

//console.log(downcase(["A", "B", "C", "D"])); // ["a", "b", "c", "d"]

console.log("-------------- Task 7 -------------------");

const evens = (arr) => arr.filter((elem) => elem % 2 === 0);

console.log(evens([1, 2, 3, 45, 79, 8])); // 2, 8
console.log("-------------- Task 8 -------------------");
const howIndex = (arr) => arr.indexOf("how");

console.log(howIndex(["hello", "how", "are", "you"])); // 1
console.log("-------------- Task 9 -------------------");

const reverse3 = (str) => str.split("").reverse("").join("");

console.log(reverse3("olleh")); // hello
console.log(reverse3("tpircSavaJ")); // javascript

console.log("-------------- Task 10 -------------------");

let maxValue = 0;
const max = (arr) => arr.reduce((acc, cur) => (acc > cur ? acc : cur));

console.log(max([1, 297, -73, 99, 10]));

console.log("-------------- Task 11 -------------------");

const sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
              const temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
          }
      }
  }
  return arr;
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'];
console.log(sort(months));

console.log("-------------- Task 12 -------------------");
const sentence =
  "Hello I am a random sentence, we have learnt HTML, CSS, git and GitHub so far. Thanks";

function countLetters(str) {
  let charSum = {};

  for (let i = 0; i < str.length; i++) {
    //console.log(str[i]);
    const letter = str[i]
    if (charSum[letter]) {
      //console.log(charSum[letter]
        charSum[letter]++;
    }else{
      charSum[letter]= 1
    }
  }
  return charSum;
}
console.log(countLetters(sentence));

//  {
//   h: 5, e: 7, l: 4, o: 3, i: 3,
//   a: 8, m: 3, r: 3, n: 6, d: 2,
//   s: 5, t: 6, c: 2, w: 1, v: 1,
//   g: 2, u: 1, b: 1, f: 1, k: 1
// }

console.log("-------------- Task 13 -------------------");

const sortedNames = (arr) => arr.map(element => element.toLowerCase()).sort();

const trainers = ["Ree", "romeo", "emile", "sergi"]
console.log(sortedNames(trainers)); // [emile, ree, romeo, sergi ] 