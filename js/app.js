
'use strict';
let score = 0;
let answers=[];
let answer2=[];

alert("welcome to my page please answer these yes/y/no/n Q and Enjoy getting to know me");
function fun1() {
 
  let Q1 = prompt('Is my name Erada abdalrhman?');
  switch (Q1.toUpperCase()) {
    case 'YES':
    case 'Y':  
      alert('yes , my name is Erada now you know my name');
      answers.push(Q1);
      score++;

return true;
    case 'NO':
      alert('no ,it is');
      score--;

return false;
    default:

      alert('plz ask me agin ');
  }

}
for (let i = 0; i < 6; i++) {

  if (fun1()) {
    break;
  };


}


function fun2() {
  let Q2 = prompt('my age is 22');
  switch (Q2.toUpperCase()) {
    case 'YES':
    case 'Y':
      alert('yes , my age is 22');
      answers.push(Q2);
      score++

      return true;
    case 'NO':
    case 'N':
      alert('no ,it is 22');
      score--;

      return false;
    default:

      alert('plz ask me agin');
  }
}
for (let i = 0; i < 6; i++) {

  if (fun2()) {
    break;
  };


}
function fun3() {
  let Q3 = prompt('Do you think that i had more than one hobbies in my childhood');
  switch (Q3.toUpperCase()) {
    case 'YES':
      case 'Y':
      alert('yes , I am had more than one ');
      answers.push(Q3);
      score++;
      return true;
    case 'NO':
    case 'N':
      alert('no ,actully  I am had more hobbies in my childhood');
      score--;

      return false;
    default:

      alert('plz ask me agin');
  }


}
for (let i = 0; i < 6; i++) {

  if (fun3()) {
    break;
  };


}
function fun4() {
  let Q4 = prompt('is my graduation project name wewe?');
  switch (Q4.toUpperCase()) {
    case 'YES':
    case 'Y': 
      alert('yes , my project name is wewe ');
      answers.push(Q4);
      score++;

      return true;
    case 'NO':
    case 'N':  
      alert('no ,actully my project name is wewe');
      score--;

      return false;
    default:
      alert('plz ask me agin');
  }
}
for (let i = 0; i < 6; i++) {

  if (fun4()) {
    break;
  };


}
function fun5() {
  //Q5
  let Q5 = prompt('Did get a high score in her project?');
  switch (Q5.toUpperCase()) {
    case 'YES':
    case 'Y': 
      alert('yes ,i got A ');
      answers.push(Q5);
      score++;

      return true;
    case 'NO':
    case 'N':   
      alert('no ,i got A');
      score--;

      return false;
    default:

      alert('plz ask me agin');
  }

}
for (let i = 0; i < 6; i++) {

  if (fun5()) {
    break;
  };


}
function fun9() {
  //Q5
  let Q9 = prompt('what is my faviourt color(RED/PINK/YELLOW');
  switch (Q9.toUpperCase()) {
    case 'RED':
    case 'red': 
      alert('yes ,it is');
      answers.push(Q9);
      score++;

      return true;
    case 'PINK':
    case 'YELLOW':   
      alert('no ,it is not');
      score--;

      return false;
    default:

      alert('plz ask me agin');
  }

}
for (let i = 0; i < 6; i++) {

  if (fun9()) {
    break;
  };


}




const startTheQuestion = function (correctAnswer, questionText) {
  for (let i = 1; i < 6; i++) {
    let Q6 = parseInt(prompt(questionText));
    if (Q6 == correctAnswer) {
      alert("The answer is correct!")
      return true;
    } else {
      if (Q6 < correctAnswer) {
        alert("the number is more than")

      } else if (Q6 > correctAnswer) {
        alert("the number is less than")

      }
      score--;
    }
  }
  alert("Try a gain")
  return false;

}

const myArray = [{ answer: 4, questionText: "How many programming languages ​​have I tried to learn" }, { answer: 2, questionText: "Ranking a movie Small Axe: Lovers Rock in the Top Ten list is" }, { answer: 8, questionText: "what is my favouirt number (5/8/12)" }
];

for (let i = 0; i < myArray.length; i++) {

  const isCorrect = startTheQuestion(myArray[i].answer, myArray[i].questionText);
  if (isCorrect) {
    score++;
  }

}

alert("Your score is " + score)

// this is update from pair person