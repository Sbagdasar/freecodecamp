/*function caseInSwitch(val) {
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
  */
 //task 2
 /*function switchOfStuff(val) {
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

cc(2); cc(3); cc(7); cc('K'); cc('A');*/
// task 8
/*
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

phoneticLookup("charlie");*/
/*
function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)){
        return obj[checkProp];
    }
    return "Not Found";
    // Only change code above this line
}*/
/*
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
*/
// Setup
/*
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
*//*
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

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);*/
// new task
// Setup
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
    for(let i=0;i<contacts.length;i++){
        if(name === contacts[i].firstName && contacts[i].hasOwnProperty(prop)){
            return contacts[i][prop]
        }else if(name !== contacts[i].firstName){
            return "No such contact"
        }else if(contacts[i].hasOwnProperty(prop) === false){
            return "No such property"
        }
    }
    // Only change code above this line
}

console.log(lookUpProfile("Kristian", "lastName"))