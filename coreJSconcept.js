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
//------Problem-*-------Finding smallest number from three different number---------
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
    return total;
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