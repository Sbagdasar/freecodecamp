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

cc(2); cc(3); cc(7); cc('K'); cc('A');
// task 8
const myDog = {
    // Only change code below this line
   
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "friends": ["Bob","Mob"]
  
  
    // Only change code above this line
  };

  //task 9
  // Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

// task10
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line
*/
//task 11
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line