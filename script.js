/*
/!*function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
    case 1:answer="alpha";
      break;
    case 2: answer="beta";
      break;
      case 3: answer="gamma";
      break;
      case 4: answer="delta";
  }


    // Only change code above this line
    return answer;
  }

  caseInSwitch(1);
  *!/
 //task 2
 /!*function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
  switch(val){
    case "a":answer = "apple";
    break;
    case "b":answer = "bird";
    break;
    case "c":answer = "cat";
    break;
    default: answer="stuff";
    break;
  }


    // Only change code above this line
    return answer;
  }

  switchOfStuff(1);

 // task 3
 function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3: answer = "Low";
    break;
    case 4:
    case 5:
    case 6: answer = "Mid";
    break;
    case 7:
    case 8:
    case 9: answer = "High";
    break;
  }


    // Only change code above this line
    return answer;
  }

  sequentialSizes(1);

 // task 4
 function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch(val){
    case "bob":answer = "Marley";
    break;
    case 42:answer = "The Answer";
    break;
    case 1:answer = "There is no #1";
    break;
   case 99:answer = "Missed me by this much!";
   break;
    case 7:answer = "Ate Nine";
    break;

  }


    // Only change code above this line
    return answer;
  }

  chainToSwitch(7);
  // task 5
  function isLess(a, b) {
    // Only change code below this line

      return a < b;
    // Only change code above this line
  }

  isLess(10, 15);
  // task 6
  // Setup
function abTest(a, b) {
    // Only change code below this line

  if(a<0 || b<0){
    return undefined
  }

    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }

  abTest(2,2);
  //task 7
  let count = 0;

function cc(card) {
  // Only change code below this line
switch(card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:count++;
  break;
  case 10:
  case "A":
  case "K":
  case "J":
  case "Q": count--;
  break;
}
if(count > 0){
  return count + " Bet"
}else{
  return count + " Hold"
}
  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');*!/
// task 8
/!*
const myDog = {
    // Only change code below this line

    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "friends": ["Bob","Mob"]


    // Only change code above this line
  };
// Setup
function phoneticLookup(val) {
    let result = "";

    // Only change code below this line
    const lookup ={
        "alpha":"Adams",
        "bravo":"Boston",
        "charlie":"Chicago",
        "delta":"Denver",
        "echo":"Easy",
        "foxtrot":"Frank"
    }
    result = lookup[val]
    // Only change code above this line
    return result;
}

phoneticLookup("charlie");*!/
/!*
function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)){
        return obj[checkProp];
    }
    return "Not Found";
    // Only change code above this line
}*!/
/!*
const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list[1];
*!/
// Setup
/!*
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if(prop!== 'tracks' && value!==''){
        records[id][prop] = value
    }else if(prop === 'tracks' && records[id].hasOwnProperty('tracks')== false){
        records[id][prop] = [value];
    }else if(prop ==='tracks' && value!==''){
        records[id][prop].push(value);
    }else if(value===''){
        delete records[id][prop];
    }

    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// Setup
const myArray = [];
let i = 5;
while(i>=0){
    myArray.push(i)
    i--
}
// Only change code below this line
// Setup
const myArray = [];
for(let i=1; i<=5; i++){
    myArray.push(i)
}
// Only change code below this line
// Setup
const myArray = [];
for(let i=1 ; i<=9 ; i+=2){
    myArray.push(i)
}
// Only change code below this line
*!//!*
// Setup
const myArray = [];
for(let i=9; i>=1; i-=2){
    myArray.push(i)
}

// Only change code below this line
// Setup
const myArr = [2, 3, 4, 5, 6];
let total=0;
for(let i=0; i<myArr.length; i++){
    total+= myArr[i]
}
// Only change code below this line
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            product=arr[i][j]*product
        }
    }
    // Only change code above this line
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);*!/
// new task
// Setup
/!*
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    for(let i=0;i<contacts.length;i++) {
        if (name === contacts[i].firstName) {
            if (contacts[i].hasOwnProperty(prop)) {

                return contacts[i][prop];
            } else {
                return "No such property"
            }
        }
    }
        return "No such contact"
        // Only change code above this line
}
console.log(lookUpProfile("Kristian", "lastName"))*!/

/!*
function randomInt(min, max){
    let x = Math.random()
    console.log(x)
    let y = Math.floor(x*(max-min+1))
    console.log(y)
    console.log(y+min)
    return y+min
}
console.log(randomInt(2, 4))
function convertToInteger(str) {
    return parseInt(str)
}

convertToInteger("56");
function checkEqual(a, b) {
    return a == b ? "Equal":"Not Equal"
}

checkEqual(1, 2);
function checkSign(num) {
    return (num > 0)?"positive":(num<0)?"negative":"zero"
}

checkSign(10);*!//!*
const countArray =[]
function countup(n) {

    if (n < 1) {
        return [];
    } else {
        console.log(n)
        countArray.push(n);
        countup(n - 1);


    }
    return countArray;
}
//console.log(countup(5));


function rangeOfNumbers(startNum, endNum) {

    if(endNum - startNum == 0 ){return [startNum]}else{
    const arr = rangeOfNumbers(startNum, endNum - 1)
        arr.push(endNum)
        return arr;
    }

};
//console.log(rangeOfNumbers(1, 5))*!/
/!*
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS)

    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();*!/
/!*
const magic = () =>{
    return new Date();
};
const myConcat = (arr1, arr2)=> {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
// Only change code below this line
const increment = (number, value=1) => number + value;
// Only change code above this line
*!/

// const sum = (...args) => {
//     console.log(args)
//     return args.reduce((a, b) => a + b, 0);
// }
// sum(1,2,3,4,5,5)
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;

// arr2 = [...arr1];  // Change this line

// console.log(arr2);

// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
// };

// // Only change code below this line

// const {today,tomorrow} = HIGH_TEMPERATURES;
// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
// };

// // Only change code below this line

// const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
// // Only change code above this line
// function reverseList(list) {
//     return list.reverse()
//     }

//     class Kata {
//         static getVolumeOfCuboid(length, width, height) {
//         return length*width*height
//         }
//       }

//       function setAlarm(employed, vacation){
//         return employed == true && vacation ==false? true:false
//       }

// var re = /(\w+)\s(\w+)/;
// var str = 'John Smith';
// var newstr = str.replace(re, '$2, $1');
// console.log(newstr);
// function correct(string)
// {
//   return string.replace(/0/gi, "O").replace(/1/gi,"I").replace(/5/gi,"S")
// }
// console.log(correct("L0ND0N"))

// const LOCAL_FORECAST = {
//     yesterday: { low: 61, high: 75 },
//     today: { low: 64, high: 77 },
//     tomorrow: { low: 68, high: 80 }
//   };

//   // Only change code below this line
//     const {today:{low:lowToday, high:highToday}}=LOCAL_FORECAST


//   // Only change code above this line

//   let a = 8, b = 6;
// // Only change code below this line
//  [a, b] = [b, a]
function mergeArrays(arr1, arr2) {
    //let arr = Array.from(new Set([...arr1, ...arr2]))
    let arr = [...(new Set([...arr1, ...arr2]))]
    return arr.sort(function (a, b) {  return a - b;  })
  }

  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };

  // Only change code below this line
  const half = ({max,min}) => (max + min) / 2.0;
  // Only change code above this line


// Only change code below this line

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
// Only change code above this line

import * as stringFunctions from './string_functions.js'
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for(let i=0; i<arr.length; i++){
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    // Only change code above this line

    return failureItems;
  }

  const failuresList = makeList(result.failure);



  const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      name,
      age,
      gender
    };
    // Only change code above this line
  };

  // Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);
console.log(bicycle.gear)
import subtract from './math_functions.js'
// Only change code above this line

subtract(7,4);

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if(responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
  console.log(result)
});
makeServerRequest.catch(error => {
  console.log(error);
});*/

let camelize = (str)=>{
  console.log(str)
  let newStr = ''
  str.split('-').map((item, index)=>{
    if(index > 0){
      newStr += item[0].toUpperCase() + item.slice(1)
    }else{
      newStr = item
    }
  }).join('')
  return newStr
}
// best practice
let camelize = (str)=>{
  return str.split('-').map((item, index)=>index === 0 ? item : item[0].toUpperCase() + item.slice(1)).join('')
}
camelize('list-style-image')