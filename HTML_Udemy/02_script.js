"use strict";
console.log("chapter_02");
//Function

//without parmeter
function myname() {
  console.log("Aashutosh Kumar");
}
myname();

//with Parameter

function friendName(fr1, fr2) {
  console.log("friend1 name is: " + fr1);
  console.log("friend2 name is: " + fr2);
  const friends = `my friends are ${fr1} and ${fr2}`;
  return friends;
}
let friendsNamefromreturn = friendName("Amar kumer", "Ranjan kumar");
console.log(friendsNamefromreturn);
function Age(birthYear) {
  const d = new Date();
  let year = d.getFullYear();
  const age = year - birthYear;
  return age;
}
let currAge = Age(1998);
console.log(currAge);

//Arrow Function
const d = new Date();
let year = d.getFullYear();
const myage1 = (birthYear) => year - birthYear;
console.log(myage1(1998));

const myretirement = (birthYear) => {
  const d = new Date();
  let year = d.getFullYear();
  const age = year - birthYear;
  const leftyear = 55 - age;
  const retirementyear = year + leftyear;
  return retirementyear;
};
const yearOfRetirement = myretirement(1998);
console.log("My year of retirement is : " + yearOfRetirement);

//Function Calling
let MainBalance = 10000;
const Upitxn = function (txnAmt) {
  if (MainBalance > txnAmt) {
    return MainBalance - txnAmt;
  } else {
    console.error("you dont have Sufficient Balance");
    return MainBalance;
  }
};
const AtmTxn = function (AvailBal, txnAmt) {
  if (AvailBal > txnAmt) {
    return AvailBal - txnAmt;
  } else {
    console.error("you dont have Sufficient Balance");
    return AvailBal;
  }
};

const transactions = function (UpiAmt, AtmAmt) {
  const upipay = Upitxn(UpiAmt);
  //console.log(upipay);
  const Atmpay = AtmTxn(upipay, AtmAmt);
  //console.log(Atmpay);
  return Atmpay; //MainBalance - UpiAmt - AtmAmt;
};
const availableBal = transactions(1100, 200000);
console.log(availableBal);

//Array

const Bestfriends = ["Aashutosh", "Amar", "Monu", "Pawan", "Ranjan"];
console.log(Bestfriends);
console.log(Bestfriends[0]);
console.log(Bestfriends.length);
const justFriends = ["Akash", "bittu", "kundan"];
const allFriends = Bestfriends.join(); //Return all names in string types
//const allFriends = Bestfriends.join(seperator); //Return all names in string types
console.log(allFriends);

const arrtyp = ["Aashu", 1998, "Kumar"];
console.log(arrtyp);
console.log(Bestfriends, justFriends);
//Add elements
Bestfriends.push("Raksha");
console.log(Bestfriends);
//RemoveElements From End
console.log(Bestfriends.pop());

//Add elements
Bestfriends.unshift("Raksha");
//RemoveElements From Start
console.log(Bestfriends.shift());

console.log(Bestfriends.indexOf("Aashutosh"));
console.log(Bestfriends.includes("Aashutosh")); //Returns true or False based on event

//Objects
const Aashu = {
  firstName: "Aashutosh",
  lastname: "Kumar",
  age: 25,
  skill: "Java",
  company: "Tcs",
};
console.log(Aashu.age);

//Loops
// 1. For Loops

for (let i = 0; i < 10; i++) {
  console.log("this is : " + i);
}
console.log(Bestfriends);

for (let i = 0; i < Bestfriends.length; i++) {
  console.log(Bestfriends[i]);
}
//while loop
let i = 0;
while (i < Bestfriends.length) {
  console.log("From While Loop: " + Bestfriends[i]);
  i++;
}
//destructuring object

const obj = { a: 12, b: 23, c: 33 };
console.log(obj);

//spread operator ((...))
const arr = [1, 3, 5, 6];
const newArr = [12, 33, 43, 44, ...arr];
console.log(newArr);
const str = ["aahu", "Raj", "kumar"];
const newStr = [...str, "Aashutosh"];
console.log(newStr);

//copy array
const name1 = ["Pawan", "Monu", "Ranjan"];
const copyStr = str;
const allFr = [...copyStr, ...name1];
console.log(allFr);

//we can break words into letters
const Name = "Aashutosh";
const words = [...Name, " ", "K"];
console.log(words);

// || operator can return datatypes also
const YesNo = null || undefined || "yes";
console.log(YesNo);
