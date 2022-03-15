/*              JavaScript Variables
There are three types of variable in javascript, like var, let, const. we use only let & const.
#let:- Variables defined with let cannot be Redeclared but can reassigned,must be Declared before use,have Block Scope.
#const:- Variables defined with const cannot be Redeclared,cannot be Reassigned,have Block Scope.
Rules for Naming JavaScript Variables
1. Variable names must start with either a letter, an underscore _, or the dollar sign $.
2. Variable names cannot start with numbers. 
3. JavaScript is case-sensitive. So y and Y are different variables.
4. Keywords cannot be used as variable names.
 */
// we assign value in variable by = sign; 
let a = 5;
a = a+5;
a += 5;
a = a*5;
a *= 5;

                    // Comparison and Logical Operators.. 
/*
 == equal to,=== equal value and equal type,!= not equal,!== not equal value or not equal type,> greater than,<	less than,>= greater than or equal to,<= less than or equal to.
 &&-and-(x < 10 && y > 1) is true,||-or-(x == 5 || y == 5) is false,!-not-!(x == y) is true.
 */
//----if always executed & *if false* then  else if will executed.
let mark = 8;
if(mark > 10){
 console.log("Mark is greater than 10");
}else if(mark > 20){
  console.log("Mark is greater than 20");
}else if(mark > 30){
  console.log("Mark is greater than 30");
}else{
  console.log("Mark is less than 10");
};

//-------comparision with variable----
const x = 13;
const y = 15;
const z = 'tousif';
const w = 'nazim';
// let a = w.typeof == z.typeof;
let c =  x < y;
// console.log(c);

//------logic and if else statement-----
if (typeof(x) == typeof(y) && typeof(w) == typeof(x)){
    let b = "Type of x & y and w & z variable are same."
    // console.log(b);
}else{
    let c = "Type of x & y and w & z variable are not same."
    // console.log(c);
};

//  Array কিভাবে ডিক্লেয়ার করে Array এর মধ্যে length, index, push, pop, indexOf, includes এইগুলা কিভাবে কাজ করে।
//-------------string ARRay------------
let country = ['BD', 'CHN', 'USA', 'UK', 'CAN', 'UAE', 'BD', 'IND', 'PAK', 'USA', 'UK', 'RU', 'NEZ'];
function uniqueCountry(country){
  updateCountry = [];
  for (const items of country){
    if(updateCountry.indexOf(items) == -1){
      updateCountry.push(items);
    }
  }
  return updateCountry;
}

console.log(uniqueCountry(country));
//--------------Number ARRAY----------
let numbers = [383, 526, 267, 276, 526, 637, 353, 828, 267, 526, 637];
 function removeRepeatedNumbers(numbers){
   let updateNumbers = [];
   for(const integer of numbers){
     if(updateNumbers.indexOf(integer) == -1){
       updateNumbers.push(integer);
     }
   }
   return updateNumbers;
 }
console.log(removeRepeatedNumbers(numbers));
// --------------Number ARRAY with for loop----------
function removeCommonNumber(numbers){
  let uncommonNumber = [];
  for(let i = 0; i<numbers.length; i++){
    let uniqueNumber = numbers.length[i];
    if(uncommonNumber.indexOf(uniqueNumber) == -1){
      uncommonNumber.push(uniqueNumber);
    }
  }
  return uniqueNumber;
}
console.log(removeCommonNumber(numbers));

let marks = [45, 79, 65, 43, 57, 90, 60, 83];

//------------------Lowest number of a ARRAY----------------
function lowestNumber(marks) {
  let num = marks[0];
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] < num) {
      num = marks[i];
    }
  }
  return num;
}
console.log(lowestNumber(marks));

//------------------AVG of a Number ARRAY----------------
function avg(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  let mean = sum / marks.length;
  return mean;
}
console.log(avg(marks));
//------------------Highest number of a ARRAY----------------
function highestmark(marks) {
  let result = marks[0];
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] > result) {
      result = marks[i];
    }
  }
  return result;
}
console.log(highestmark(marks));

//------Problem-1*-------Finding smallest Number From Array----------
//-------------while Loops----------
let studentMarks = [67, 54, 88, 45, 90, 77, 79, 40, 70, 36, 65, 59];
function lowestMark(studentMarks){
 let minMark = studentMarks[0];
  for(var i=0; i <studentMarks.length; i++){
    let marks= studentMarks[i];
    if(marks<minMark){
      minMark = marks;
    }
  }
  return minMark;
}
console.log(lowestMark(studentMarks));
//-------------while Loops----------
function minStudentMarks(studentMarks){
  let minMarks = studentMarks[0];
  let i = 0;
  while(i<studentMarks.length){
   let mark= studentMarks[i];
   i++;
   if(mark<minMarks){
     minMarks = mark
   }
  }
  return minMarks;
}
console.log(minStudentMarks(studentMarks));
//------Problem--------Finding smallest number from three different number---------
//-------------From Array----------
let classStudents = [127, 230, 185];
function mostStudents(classStudents){
  let maxStudentClass = classStudents[0];
  for(let i = 0; i < classStudents.length; i++){
    let students = classStudents[i];
    if(students>maxStudentClass){
      maxStudentClass= students;
    }
  }
  return maxStudentClass;
}
console.log(mostStudents(classStudents));
//-------------from three number----------
let a = 32547;
let b = 74988;
let c = 87824;
function largestNumber(a,b,c){
  if(a>b&&a>c){
    return ("Largest number: ", a);
  }else if(b>a&&b>c){
    return ("Largest number: ", b);
  }else{
    return ("Largest number: ", c);
  }
}
console.log(largestNumber(a,b,c));

//------Problem--------Finding smallest number from three different number---------
//-------------From Array----------

let weight = [67, 55, 43, 34, 58, 85, 48];
  let total = 0;
  for(let i = 0; i <weight.length; i++){
    total += weight[i];
  }
  let a = total;
function mean(a){
   let average = total/weight.length;
   return mean
}
console.log(mean(total));
// let totalWeight = sum(weight);
// function mean(){
//   let average = totalWeight/;
//   return mean; 
// }
// console.log("The average of weight:- ", + mean());

// function একটা অবশ্য জিনিস। বিশেষ করে সিম্পল একটা ফাংশন কখন ডিক্লেয়ার করতে হয়। কখন ফাংশন থেকে return করে। আর কিভাবে ফাংশন এর মধ্যে parameter নিতে হয়। 

//-------Function--Concept-------

//----write a function that show number is +/-.

function isPositive(number){
  if( number > 0){
    return true;
  }else{
    return false;
  }
}

let result = isPositive

//----print all even number from 1-20----

function evenDegit(){
  for(let i = 1; i<= 20; i++){
    if(i % 2 ==0){
      console.log(i);
    }if(i % 2 !=0){
      console.log("Odd number:- ", i);
    }
  }
}

evenDegit();

//count numbers divisible by 3 from 1-20;
function divisibleBy3(){
  let count = 0;
  for(let i = 1; i <= 20; i++){
    if(i % 3 == 0){
      count = count+1;
    }
  }
  return count;
}

console.log(divisibleBy3());

//calculate the mean of all the numbers that is divisible by 3 from 1 to n;

function average(n){
  let sum = 0, coUnt = 0;
  for(let i = 1; i < n; i++){
    if(i%3 == 0){
      sum = sum + i;//i here bcz i = ?/3 not one.
      coUnt = coUnt + 1;
    }
  }
  let avg = sum/coUnt
  return avg;
}

console.log(average(60));

//--Question:- count the number of vowel in a string 

let string = "The quick brown fox jumps over a lazy dog."
function countVowel(string){
  // let vowel = 0;
  let vowels = "";
  for (let i = 0; i < string.length; i++){
    let letter = string[i].toLowerCase();
    if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
      vowels += letter;
    }
  }
  return vowels;
}

console.log(countVowel(string));

/* mular dam? for first 2kg = 30tk/kg, 2k+ = 25kg/kg.
write a function to calculate price based on given quantity & handle erros--*/

function mularPrice(quantity){
  if(typeof quantity != "number" || quantity <= 0){
    return "Please enter valid quantity"
  }
  if(quantity > 19){
    return "please order less than 20kg."
  }
  let price = 0;
  if(quantity <= 2){
    price = 30* quantity;
  }else{
    price = 25 * quantity;
  }
  return price;
}

console.log(mularPrice(21));
console.log(mularPrice(10));
console.log(mularPrice(2));
console.log(mularPrice(0));

/* write a function for calculating Electric Bill. first 100 units price 6tk, 101 units to 200 units price 8tk, 200+ units price 10tk. now calculate the bill? */
function calculatingBill(units){
  if (typeof units != 'number' || units <= 0) {
    return "Please enter valid units!"
  }
  if( units <= 100){
    electricBill = units*6;
    return electricBill;
  }
  if(units <=200){
    let regularCharge = 100* 6;
    electricBill= (units-100)*8 + regularCharge;
    return electricBill;
  }
  if(units > 200){
    let regularCharge = 100* 6;
    let extraCharge = (200 - 100) * 8
    electricBill = (units - 200) * 10 + extraCharge + regularCharge;
    return electricBill;
  }
}

console.log('Total elcetric bill charge:- ',calculatingBill(99));
console.log('Total elcetric bill charge:- ',calculatingBill(199));
console.log('Total elcetric bill charge:- ',calculatingBill(260));
console.log('Total elcetric bill charge:- ',calculatingBill(-260));
console.log('Total elcetric bill charge:- ',calculatingBill("tousif"));

//--------------SOME PROBLEM Solving---------------

//--Q-1--User iput feet & get output in Inch......
function feetToInch(feet) {
  let result = feet * 12;
  return result;
}

console.log("Calculation of Inch:- ", feetToInch(8));

//--Q-2--User iput CM & get output in Meter......

function centimeterToMeter(CM) {
  let result = CM * .01;
  return result;
}

console.log("Calculation of Meter:- ", centimeterToMeter(800));

//--Q-3---how many pages need to print Book-----------

const firstBookPages = 100;
const secondBookPages = 200;
const thirdBookPages = 300;

function paperRequirements(Book1, Book2, Book3){
  let totalPages = ((firstBookPages * Book1) + (secondBookPages * Book2) + (thirdBookPages * Book3));
  return totalPages;
}

console.log("Total:- ", paperRequirements(4, 5, 7), " pages need to print those Books.");

//--Q-4------Show your BestFriend name from function which is biggest in length------------

let fndName = ["Nazim", "Manik", "Anowar", "Takreem", "Shiblu", "Monir"];

function bestFriend(fndName){
  let longFndName = fndName[0];
  for (let i = 0; i < fndName.length; i++){
    if (fndName[i].length > longFndName.length){
     longFndName = fndName[i];
   }
  }
  return longFndName;
}

console.log(bestFriend(fndName));

//--Q-5-write a fuction which will retun new array from old array where the value will be negative number--

let result = [67, 56, 34, 76, -80, 48, 45];
function positiveResult(result){
  let updateResult = [];
  for(i = 0; i<result.length; i++){
    if(result.length[i] <= 0){
      updateResult.push();
      break
    }
  }
  return updateResult;
}

console.log(positiveResult(result));

function celsiusConverter(fahrenheit){
  var temparture =(fahrenheit-32)*5/9;
return temparture
  console.log(temparture);
}
console.log(celsiusConverter(34));

function message(names){
  var customMsg = (names + " Welcome to Programming Hero");
  return customMsg;
}
console.log(message('Tousif'));

function fahrenheitConverter(celsius){
  var temparture = (celsius * 9/5) + 32;
  return temparture;
}

console.log(fahrenheitConverter(32));
//  programe a function for food delivery process.

 function foodPandda(FoodNames, quantity){
   if(FoodNames.toLowerCase()=="pizza" && quantity >=1){
     let price = quantity*50;
     var orderInfo = "Order successfull! "+ quantity + " PIZZA & PRICE:- "+ price;
     return orderInfo;
   }else{
     var a = "Sorry! Submit your order properly. Thank You!"
     console.log(a);
   }
 }

 console.log(foodPandda('pIzza', 1));
 console.log(foodPandda('pizZa', 0));
 console.log(foodPandda('Pizza', 5));
 console.log(foodPandda('PiZza', 3));


function oneToHundred(){
  var i = 0;
  while(i<=99){
    i++,
    console.log(i)
  }
return i;
} 
console.log(oneToHundred())

function oddNum(){
  for(var i=50;i<=80;i++){
    if((i%2)!=0){
    console.log(i)
    }
  }
}
oddNum();
//-----------LARGEST NUMBER----------
function largestNumber(a,b,c){
  if(a>b&&a>c){
    return a;
  }
  else if(b>c&&b>a){
    return b;
  }
  else{
    return c;
  }
}
console.log(largestNumber(56,88,69));
//-----------SMALLEST NUMBER----------
function smallestNumber(x,y,z){
  if(x<y&&x<z){
    return x;
  }
  else if(y<x&&y<z){
    return x;
  }
  else{
    return z;
  }
}
console.log(smallestNumber(59,58,56));
//-----------SMALLEST NUMBER in an Arrey----------

let playerAges = [34, 23, 25, 24, 28, 31, 20, 27, 37, 36, 29];
function youngPlayer(playerAges){
  let youngAge = playerAges[0];
  for(i=0; i<playerAges.length; i++){
    const ages = playerAges[i];
    if(ages<youngAge){
      youngAge=ages;
    }
  }
  return youngAge
}
console.log(youngPlayer(playerAges));

//---Print in Console the odd numbers less than 100---
for(let i=0; i<100; i++){
    if(i%2 ==1){
 console.log(i);
 }
}

//-----Print in Console the multiplication table with 7-----
const number = 7;
for(let i = 1; i <= 10; i++){
    console.log(`${number} x ${i} = ${i * number}`);
}

//-----Calculate 10!----
let factorial = 1;
for(let i=1; i<=10; i++){
  factorial *= i;
}
console.log(factorial);

//---Find the maximum number in an array of numbers
let marks = [45, 79, 65, 43, 57, 90, 60, 83];
function maxNumber(marks) {
    let num = Math.max([45, 79, 65, 43, 57, 90, 60, 83]);
    // for(let i = 0; i<marks.length; i++){
    // }
    return num;
}

console.log(maxNumber(marks));

var name = "hero alom";
var lname = "Uganda";
//আমরা  যদি  সাধারণ  ভাবে  করি  তাহলে এভাবে  করতে   পারি
console.log("Hello " + name + " Welcome to " + lname);

//এবং  খুব  সহজে  টেমপ্লেট স্ট্রিং  ব্যবহার  করে  যে  কোনো  জায়গায়  ডাইনামিক  ভ্যালু  ব্যবহার  করতে   পারি
console.log(`Hello, ${name}!Welcome to ${lname}`);

// spread operators can be used for arrays or objects

// cloning to prevent mutation.
let numList = [1, 2, 3];
let numListClone = [...numList]; // [1, 2, 3]

// spread operator for destructuring.
let animal = {
  name: "dog",
  color: "brown",
  age: 7,
};
let { age, ...rest } = animal;

// let { age, ...rest } = animal || {};
console.log(rest);

// spread operator as rest operator
function sum({ name, ...rest }) {
  console.log(rest);
}

sum(animal);

// spread operator for merging arrays or objects
const numList1 = [1, 2, 3];
const numList2 = {
  name: "hero",
  Age: 18,
};
let numLists = [...numList1, numList2];
console.log(numLists);

let animalWithBreed = {
  ...animal,
  breed: "",
};

console.log(animalWithBreed);

//নেস্টেড  অবজেক্ট  অফ  এরে

const dreamGirl = [
  {
    dream1: {
      name: "bbu",
      height: "5.4",
      family: [{ father: "rock", mother: "shila", sister: "chinki" }],
      age: undefined,
      contactInfo: [
        {
          facebook: {
            link: "https://www.facebook.com/",
            followers: "12545",
            status: "single",
            friendsList: [
              { name: "rofik" },
              { name: "jobbar" },
              { name: "salam" },
              { name: "borkot" },
              undefined,
            ],
          },
        },
        { instagram: "https://www.instagram.com/" },
        { twitter: "https://twitter.com/" },
        { github: "https://github.com/" },
        { phone: ["01254823212", "02152457"] },
      ],
    },
  },
];

console.log(dreamGirl[0].dream1);

//-----------Home Test----------
const friendList = [
  { name: "rofik" },
  { name: "jobbar" },
  { name: "salam" },
  { name: "borkot" },
  undefined,
];

for (const friend of friendList) {
  //  const friend= (friendList[0].name)
  friend == undefined ? "undefined" : friend.name;
  console.log(friend);
}


// loop for in loop

const object = { a: 1, b: 2, c: 3 };
console.log(object["a"]);

for (const property in object) {
  console.log(property);
  console.log(object);
  //   console.log(`${property}: ${object[property]}`);
}

// for loop

const friends = ["hero", "broo", "china", "angel"];
for (let i = 0; i < friends.length; i++) {
  const element = friends[i];
  console.log(element);
}

// ম্যাপ কি ?  কিভাবে  কাজ করে ?

// ১) এরেকে লুপ করে একটা একটা করে এলিমেন্টকে ধরবে
//  ২) এরপর একটা ফাংশনকে কল করে সেই ফাংশনে এলিমেন্টগুলকে পাঠাবে।
// ৩) এই ফাংশন একটা নির্দিষ্ট কাজ করে যা রিটার্ন করবে তা একটা এরে
// ৪) সেই এরেকে রিটার্ব করবে

const numbers = [1, 2, 4, 6, 5, 10];

function sum(x) {
  return x * x;
}

const result = numbers.map(
  (x = function (x) {
    return x * x;
  })
);
// console.log(result);

// using loop insted of map
const numbers1 = [1, 2, 4, 6, 5, 10];
const newArray = [];
for (let i = 0; i < numbers1.length; i++) {
  const element = numbers1[i];
  const result = sum(element);
  newArray.push(result);
}

console.log(newArray);

// এক লাইনেই  ম্যাপ করে   ফেলা
const output3 = numbers.map((x) => x * x);
console.log(output3);

// ম্যাপ এ যেভাবে  ভিতরে ভিতরে  লুপ চলে

//Filter

// 1) filter হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে.
// 2) যতগুলো পাবে তত খুলো দিবে । না পাইলে খালি এরে দিবে
// 3) ফিল্টার  চেকপয়েন্ট অথবা শর্ত  সাপেক্ষে   কিছু এলিমেন্ট কে নিবে আবার কিছু এলিমেন্ট কে নিবে  না |

const products = [
  { id: 1, name: "apple", price: 500, color: "golden" },
  { id: 2, name: "xiaomi", price: 124, color: "black" },
  { id: 3, name: "samsung", price: 200, color: "black" },
  { id: 4, name: "samsung2", price: 200, color: "black" },
  { id: 5, name: "lenovo", price: 300, color: "pink" },
  { id: 6, name: "xiaomi", price: 100, color: "pink" },
  { id: 7, name: "lenovo", price: 300, color: "pink" },
];

const output1 = products.filter((pd) => pd.name == "lenovo");
console.log(output1);

// এরে এর ভিতর থেকে  কিছু এলিমেন্ট কে বাদ দিয়ে  বাকি গুলা  কে নেওয়া
const output = products.filter((pd) => pd.color !== "pink");
console.log(output);

// filter with three arguments

const numbers2 = [1, 2, 3, 4, 5];
const result2 = numbers2.filter(function (element, index, arr) {
  console.log(index);
  console.log(arr);
  return element > 2;
});
console.log(result2);

// ফিল্টার এর ছোট ভাই  ফাইন্ড find

// find হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে,
// শুধু মাত্র প্রথম এলিমেন্ট কে  দিবে। না পাইলে আন্ডিফাইন দিবে

const output5 = products.find((pd) => pd.color == "black");
console.log(output5);

//একটা মজার ব্যাপার হলো ভিতরে  ভিতরে সবাই লুপ ই  চালাচ্ছে

// optional chaining

const number = null;

console.log(number?.age, number?.name);
console.log(number);

// indexof

const friends2 = ["squash", "onions", "shallots"];

console.log(friends2.indexOf("gias") == -1);

// এইবার  একটু  API  নিয়ে  আলোচনা  করা  যাক

// all api link: https://apipheny.io/free-api/

// open libary api : https://openlibrary.org/works/OL45883W.json

// university list : http://universities.hipolabs.com/search?country=United+States
const data = () => {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then((response) => response.json())
    .then((data) => {
      another(data.drinks);
    });
};
data();

const another = (data) => {
  console.log(data);
};
function quickCheck(arr, elem) {
  return arr.indexOf(elem) != -1;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));