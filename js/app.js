alert("welcome to my page please answer these yes/no Q and Enjoy getting to know me");
let Q1 = prompt('Is my name Erada abdalrhman?');
switch (Q1.toUpperCase()) {
  case 'YES': console.log('yes , my name is Erada');
  case 'Y': console.log('yes ,my name is Erada');
    alert('yes , my name is Erada now you know my name');
    break;
  case 'NO': console.log('no , it is not');
  case 'N': console.log('no , no it is not');
    alert('no ,it is');
    break;
  default:
    console.log('plz ask me agin');
    alert('plz ask me agin');
}

let Q2 = prompt('my age is older than 22');
switch (Q2.toUpperCase()) {
  case 'YES': console.log('yes , my age is 22');
  case 'Y': console.log('yes ,my age is 22');
    alert('yes , my age is 22');
    break;
  case 'NO': console.log('no , it is not');
  case 'N': console.log('no , no it is not');
    alert('no ,it is 22');
    break;
  default:
    console.log('plz ask me agin');
    alert('plz ask me agin');
}

//Q3
let Q3 = prompt('Do you think that i had more than one hobbies in my childhood');
switch (Q3.toUpperCase()) {
  case 'YES': console.log('yes , am i');
  case 'Y': console.log('yes ,am i');
    alert('yes , I am had more than one ');
    break;
  case 'NO': console.log('no , iam not');
  case 'N': console.log('no , iam not');
    alert('no ,actully  I am had more hobbies in my childhood');
    break;
  default:
    console.log('plz ask me agin');
    alert('plz ask me agin');
}



let Q4 = prompt('is my graduation project name wewe?');
switch (Q4.toUpperCase()) {
  case 'YES': console.log('yes , it is');
  case 'Y': console.log('yes ,it is');
    alert('yes , my project name is wewe ');
    break;
  case 'NO': console.log('no , it is not');
  case 'N': console.log('no ,it is not');
    alert('no ,actully my project name is wewe');
    break;
  default:
    console.log('plz ask me agin');
    alert('plz ask me agin');
}

//Q5
let Q5 = prompt('Did get a high score in her project?');
switch (Q5.toUpperCase()) {
  case 'YES': console.log('yes , i do');
  case 'Y': console.log('yes ,i do');
    alert('yes ,i got A ');
    break;
  case 'NO': console.log('no , i dont');
  case 'N': console.log('no ,i dont');
    alert('no ,i got A');
    break;
  default:
    console.log('plz ask me agin');
    alert('plz ask me agin');
}
let score =0;

const startTheQuestion = function (correctAnswer,questionText) {
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

const myArray=[{answer:4,questionText:"How many programming languages ​​have I tried to learn"},{answer:2,questionText:"Ranking a movie Small Axe: Lovers Rock in the Top Ten list is"}
];

for(i=0;i<myArray.length;i++){

  const isCorrect = startTheQuestion(myArray[i].answer,myArray[i].questionText);
  if(isCorrect){
    score++;
  }

}


alert ("Your score is "+score)
