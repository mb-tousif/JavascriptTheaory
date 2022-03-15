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