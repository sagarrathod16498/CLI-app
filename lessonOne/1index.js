const readlinesync = require("readline-sync");
let score = 0;

// ex 1
// console.log("Sagar Rathod");

// in any programing their is only three things ..
// 1.input, 2.processing , 3.output.

// ex2-6 // input things

// const userAge = readlinesync.question("Am i older than 25 age ? ")
// console.log(" you enter : "+ userAge);

// if(userAge === "yes" ){
//     console.log("you can allowed");
//     score = 0+1;
//     console.log(score);
// }else{
//     console.log("No you are not allowed");
//     score = 0-1;
//     console.log(score);
// }

//ex 7 fucntion  // processing

// function product(num1, num2) {
//     console.log("number one : "+ num1 , "number two : "+ num2 );

//     var sum = num1 * num2;
//     // console.log("the sum of "+ num1 +" and "+ num2+ ": " + sum);
//   return sum; // output

// }

// // how to use the function or call the function
// const result = product(5, 2); // 5,2 is input
// console.log("the sum of : " + result);
// console.log(product(10, 8));

// questionOne = "hey tell are you older than 20 ? ";
// answerOne = "yes"

// function play(question, answer) {
//     let userAnswer = readlinesync.question(question);
//     console.log("You answer " + userAnswer);

//     if(userAnswer === answer) {
//         console.log("yes your're right ")
//         score = score +1 ;
//         console.log("score is "+score);
//     }else {
//         console.log("your are wrong !!!");
//         score = score -1;
//         console.log("your score is "+ score)
//     }
// }

// play(questionOne, answerOne);
// play("where are you living ?", "surat");
// play("what are you doing ?", "programming");
// play("how you going to surat ?", "brts");

// for(let i=0; i<=5; i++) {
//     console.log("sagar")
// }

// for(let i=0; i<10; i++){
//     var a = 20;
//     var sum = a + i;
//     console.log(sum)
// }
// let rows = 5;

// for (var i=1; i<=rows; i++) {
//     let str = ""
//     for(var j = 1; j <= i; j++){
//         str += '* '
//     }
//     console.log(str)
// }
// let str = ""
// for (var i=0; i < rows; i++) {
//     for(var j = 0; j < rows - i ; j++){
//         str += '* '
//     }
//     str += "\n";
// }
// console.log(str)

// Arrays
// let names= ["sagar", "mayur", "rakesh","badal","sem"];
// console.log(names[1]);
// console.log(names.length)
// console.log(names[5-1])

// array with for loop
// for (let i = 0; i < names.length; i++){
//     console.log(names[i])
// }

// objects

// console.log (student1.name);
// console.log (student2.name);
// const superHero = [
//     supermen= {
//         name : "supermen",
//         costumeColor: "blueRed",
//         city : "newyork"
//     },
//     batmen= {
//         name : "batmen",
//         costumeColor: "black",
//         city : "america"
//     }
// ];

// for(let i = 0; i< superHero.length; i++){
//     var currentHero = superHero[i];
//     console.log(currentHero.name);
//     console.log(currentHero.costumeColor);
//     console.log(currentHero.city);
//     console.log("-----------")
// }

// imput >> processing >> output
// let userName = readlinesync.question("what is your name ? ");
// console.log("welcome " + userName + " do you know Sagar");

// // play function
// function play(question, answer){
//     let userAnswer = readlinesync.question(question);

//     if(userAnswer === answer){
//         console.log("Right");
//         score = score +1;
//     }else{
//         console.log("No it's Wrong! ")
//     }
//     console.log("Current score is : "+ score)
//     console.log("======================");
// }

// //array of objects
// let questions =[
//     {
//         question: "Where do i livi ? ",
//         answer: "surat"
//     },
//     {
//         question: "favorite hero ? ",
//         answer: "hanumanji"
//     }
// ]

// // loop
// for(let i= 0; i<questions.length; i++){
//     let currentQuestion = questions[i];
//     play(currentQuestion.question, currentQuestion.answer);
// }

// console.log("yay! Your score is " + score)

//********************************************************************************* */
// again for practice of this last paygame question answer and score

var useName = readlinesync.question("hey tell me your name? ");
console.log("Welcome : " + useName + ", Now you can play the game");

function play(question, answer) {
  var userAnswer = readlinesync.question(question);

  if (answer === userAnswer) {
    console.log("yes your right");
    score += 1;
    console.log("you score " + score + " point ");
  } else {
    console.log("ow! you are wrong buddy, try angain !!!");
  }
}
play("do you know ,who is SAGAR ? ", "yes his my friend");
const questions = [
    { 
        question: "do you know, who is SAGAR ? ===> ", 
        answer: "yes" 
    },
    { 
        question: "do you know ,where SAGAR live ?  ===> ", 
        answer: "kadodara" 
    },
    { 
        question: "do you know ,SAGAR is gujarati ? ===> ", 
        answer: "yes" 
    },
];

for(let i=0; i< questions.length; i++){
    let currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
}
console.log("Your total score is : ")


// assignment ***************************************************************
// 1.create a CLI app to check whether user was born in a leap year
const userName = readlinesync.question("tell me your name ? ");
const userBdate = readlinesync.question(userName + " Enter your Birth Date : YY/MM/DD ");

const fullDateOfBirth = userBdate;

// Parse the full date into a Date object
const dateOfBirth = new Date(fullDateOfBirth);

// Extract the year component from the Date object
const year = dateOfBirth.getFullYear();
// console.log(year)

function isLeapYear(year)
{
    if((year % 400 == 0) ||(year % 100 != 0) && (year % 4 == 0)){
        console.log(year + " Yes , Your born year is in leap year");
        // return 1;
    }
    else{
        console.log(year + " No , Your born year is NOT in leap year")
        // return 0;
    }
}

console.log(isLeapYear(year))
//******************************************************************* */
//2. is your birth day a prime number?

const date = dateOfBirth.getDate();
console.log(date);
function primeDate(date)
{
    if(date === 1){
        console.log(`${date} : date not prime number`)
    }else if(date<1){
        console.log(`${date} : date not prime number`)
    }else{
        for(let i = 2; i<= date; i++){
            if(date%i == 0){
                var result = `${date} : date not prime number`;
                break;
            }else{
                var result = `${date} : date a prime number`;
            }
        }
        console.log(result);
    }
}

console.log(primeDate(date))