/* ----> Warming Up Fundamentals start here <---- */

/* Even or Odd */ 
function even_or_odd(number) {
  if (number%2 === 0){
  return "Even";
    }
  else return "Odd";
}
console.log(even_or_odd(4));
console.log(even_or_odd(5));

/* Get the Middle Character */ 
function getMiddle(s)
{
  let m = s.length / 2;
  if(s.length%2 == 0) {
    return s[m-1] + s[m];
  }
  else {
    m = (s.length +1) / 2;
    return s[m-1];
  }
}
console.log(getMiddle("test"));
console.log(getMiddle("middle"));
console.log(getMiddle("testing"));
console.log(getMiddle("A"));

/* Vowel Count */ 
function getCount(str) {
  var vowelsCount = 0;
  let n = 0;
  while(n <= (str.length - 1)) {
    if (str[n] === "a") {
      vowelsCount++;
    }
    if (str[n] === "e")
      {
        vowelsCount++;
      }
    if (str[n] === "i") {
      vowelsCount++;
    }
    if (str[n] === "o") {
      vowelsCount++;
    }
    if (str[n] === "u") {
      vowelsCount++;
    }
    n++;
  }
  return vowelsCount;
}

console.log(getCount("abrcibedo"));

// ----> Warming Up Fundamentals end here <---- 

/* ----> Algorithms start here <---- */ 

/* Credit Card Mask */
function maskify(cc) {
var arraycc = cc.split("");
  let m = 0;
  while ( m <= (arraycc.length - 5)) {
    arraycc[m] = "#";
    m++;
  }
  var ccstring = arraycc.join('');
  return ccstring;
}

console.log(maskify("1254877822187456"));

// Is this a triangle? 
function isTriangle(a,b,c)
{
  if ((a + b > c) && (a + c > b) && (b + c > a)) {
    return true;
  }
  else
   return false;
}

console.log(isTriangle(1,2,2));
console.log(isTriangle(7,2,2));

// Find the divisor 

function divisors(integer) {
  const array = [];
  
  for (let i = 2; i<integer; i++) {
    integer%i === 0 && array.push(i) 
  }
  if (array.length === 0) {
    return `${integer} is prime`
  }
  else 
    return array;
  
}

console.log(divisors(15));
console.log(divisors(12));
console.log(divisors(13));  

/* ----> Algortithms end here <---- */ 

/* ----> Data Types start here <---- */ 

/* Remove the first and last character */ 

function removeChar(str){
var arraystr = str.split("");
  arraystr[0] = "";
  arraystr[arraystr.length - 1] = "";
  var strstr = arraystr.join('');	
  return strstr;
  }


 console.log(removeChar("eokpssslkd")); 

 // Remove string spaces  

 function noSpace(x){
 var arraystr = x.split("");
    var n = 0;
  while (n <= arraystr.length) {
    if (arraystr[n] === " ") {
      arraystr[n] = "";
    }
    else n++
    }
  var noSpaceStr = arraystr.join('');
  return noSpaceStr;
}

console.log(noSpace("test me now  and it works"));

	// Return negative 

	function makeNegative(num) {
 if (num <= 0) {
   return num;
 }
  else {
    var minus = num * (-1);
    return minus;
  }
}

console.log(makeNegative(2));
console.log(makeNegative(0));
console.log(makeNegative(-2.16));

 // ----> Data Types end here <---- 

 // ----> Numbers start here <----

// Basic Mathematical Operations 

 function basicOp(operation, value1, value2)
{
  if (operation === "+") {
    return value1 + value2;
  }
  else if (operation === "-") {
    return value1 - value2;
  }
  else if (operation === "*") {
    return value1 * value2;
  }
  else if (operation === "/") {
    return value1 / value2;
  }
  
}

console.log(basicOp('+',4,6));
console.log(basicOp('-',10,12));
console.log(basicOp('*',5,8));
console.log(basicOp('/',19,8));

// Sum of the first nth term of Series

function SeriesSum(n) {
   for (var result = 0, i = 0; i < n; i++) {
     result += 1 / (1 + i * 3)
   }
   return result.toFixed(2);
 }

 console.log(SeriesSum(1));
 console.log(SeriesSum(2));
 console.log(SeriesSum(3));
 console.log(SeriesSum(4));


 // Century from a year 

 function century(year) {
  
  return Math.ceil(year/100);
}

console.log(century(1605));
console.log(century(1800));
console.log(century(1907));
console.log(century(2020));

 // ----> Numbers end here <----


// ----> Strings Starts Here <----- 

// Reversed string 

function solution(str){
 return str.split("").reverse().join(""); 
}

console.log(solution("Hello"));
console.log(solution("World"));
console.log(solution("Hello World"));



// String ends with ? 

function solution1(str, ending){
 return str.endsWith(ending, str.length);
}

console.log(solution1('abcde','cde'));
console.log(solution1('jakarty',' hour'));


// Do i get a bonus ? 

function bonusTime(salary, bonus) {
if (bonus === true) {
  const result = salary * 10;
  return `£${result}`;
}
  else 
    return `£${salary}`;
}

console.log(bonusTime(5000, true));
console.log(bonusTime(5000, false));
// ----> Strings ends here <----- 


// ----> Arrays starts here <----

// Counting Sheep... 

function countSheeps(arrayOfSheep) {
  let i = 0;
  arrayOfSheep.forEach((element) =>{
    if (element === true) {
      i++;
    }


  })
  return i;
};

var arraytest = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];

console.log(countSheeps(arraytest));


// Ones and Zeros 

const binaryArrayToNumber = arr => {
 const str = arr.join('')
 var dec = parseInt (str, 2)
 return dec;
};

console.log(binaryArrayToNumber([1,1,0,1]));
console.log(binaryArrayToNumber([0,1,1,1]));
console.log(binaryArrayToNumber([0,1,0,1]));


// A Needle in the haystack 

function findNeedle(haystack) {
  return (`found the needle at position ${
haystack.indexOf('needle')}`)
}

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));
console.log(findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']));

// ------> Arrays ends here  <------

// ------> Objects starts here <----- 


// Make a function that does arithmetic!
function arithmetic(a, b, operator){
  switch(operator) {
      case "add":
      return a + b;
      break;
      case "subtract":
      return a - b;
      break;
      case "multiply": 
      return a * b;
      break;
      case "divide":
      return a / b;
      break;
  }
};

console.log(arithmetic(1,2,"add"));
console.log(arithmetic(4,4,"divide"));
console.log(arithmetic(4,4,"subtract"));
console.log(arithmetic(4,4,"multiply"));

// Add proprety to every object in array 

questions.forEach(function (prop) {
  prop.usersAnswer = null;
});

// FIXME: Get Full Name 

class Dinglemouse{

  constructor( firstName, lastName ){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getFullName(){
    return `${this.firstName} ${this.lastName}`.trim();
  }
  
}

// ------> Objects ends here <------

// -----> Basic Language Feature starts here <-----

// Grasshopper - summation 

var summation = function (num) {
  let result = 0;
 for (var i = 0; i <=num; i++) {
   result += i;
 }
  return result;
}

// Jenny's secret message 

function greet(name){
   if(name === "Johnny")
  return "Hello, my love!";
  else
    return "Hello, " + name + "!";
}

// Function 1- hello world 

function greet() {
  return "hello world!"
}

// ------> Conditional Statements (control flow) starts here <-----

// Switch/Case - Bug Fixing#6 

function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b;
      break;
    case'-': result = value.a - value.b;
      break;
    case'/': result = value.a / value.b;
      break;
    case'*': result = value.a * value.b;
      break;
    case'%': result = value.a % value.b;
      break;
    case'^': result = Math.pow(value.a, value.b);
      break;
  }
  return result;
}

// Leonardo Dicaprio and Oscars

function leo(oscar){
  if (oscar === 88) {
    return "Leo finally won the oscar! Leo is happy";
  }
  else if (oscar === 86) {
    return "Not even for Wolf of wallstreet?!";
  }
  else if ((oscar != 88 || oscar !=86) && oscar < 88) {
    return "When will you give Leo an Oscar?"
  }
  else if (oscar > 88)
    return "Leo got one already!"; 

}

// Drink About 

function peopleWithAgeDrink(old) {
  if (old < 14) {
    return "drink toddy";
  }
  else if (old < 18 && 14<= old) {
    return "drink coke"
  }
  else if (old < 21 && 18 <= old) {
    return "drink beer"
  }
  else if (21 <= old) {
    return "drink whisky"
  }
};


// ------> Loops starts here <----- 

// Sentence smash 

function smash (words) {
    return words.join(" ");
      
};

// Double Char 

function doubleChar(str) {
  let array = str.split("");
  let array2 = array.map(char => char + char);
  let str2 = array2.join("");
  return str2;
}

// Unfinished Loop *- Bug Fixing#1 

function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number;counter++){
    newArray.push(counter);
  }
  
  return newArray;
}


// -----> #changing gears starts here <-----

// Who likes it? 
function likes(names) {
  if (names.length ===0) {
    return "no one likes this";
  }
  else if (names.length === 1) {
    return `${names[0]} likes this`;
  }
  else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`
  }
  else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }
  else 
    return `${names[0]}, ${names[1]} and ${names.length -2} others like this`
}

// Multiples of 3 or 5 

function solution(number){
  let sum = 0;
  for ( let i = 1 ; i < number ; i++) {
    if (i%3 === 0 || i%5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// Stop gninnipS My sdroW!


function spinWords(str){
 let array = str.split(" ");
  for (let i = 0 ; i < array.length ; i++) {
    if (array[i].length >= 5) {
      array[i] = array[i].split("").reverse().join("");
    }
  }
  return array.join(" ")
}