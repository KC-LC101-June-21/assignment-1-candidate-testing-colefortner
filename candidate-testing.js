// const input = require('readline-sync');

// // TODO 2: modify your quiz app to ask 5 questions //

// // TODO 1.1a: Define candidateName // 
// let candidateName = '';

// // TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
// let question = 'Who was the first American woman in space? ';
// let correctAnswer = 'Sally Ride';
// let candidateAnswer = '';
// let questions = [
//                   'Who was the first American woman in space? ',
//                   'True or false: 5 kilometer == 5000 meters? ',
//                   '(5 + 3)/2 * 10 = ? ',
//                   "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
//                   'What is the minimum crew size for the ISS? '
//                 ];
// let correctAnswers = [
//                         'Sally Ride',
//                         'true',
//                         '40',
//                         'Trajectory',
//                         '3'
//                       ];
// let candidateAnswers = [];


// function askForName() {
//   // TODO 1.1b: Ask for candidate's name //
//   candidateName = input.question('Please enter your name: ')
// }

// function askQuestion() {
//   // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//   for(let i = 0; i < questions.length; i++){
//     let answer = input.question(questions[i]);
//     candidateAnswers.push(answer)
//   }
//   // candidateAnswer = input.question(question);
// }
// console.log(candidateAnswers)
// function gradeQuiz(candidateAnswers) {

//   // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
//   // if(candidateAnswer === correctAnswer){
//   //   console.log('That is correct!')
//   // } else {
//   //   console.log('That is incorrect!')
//   // }
//   let grade = 0;
//   let correct = 0;
//   let status = '';

//   console.log(`Candidate Name: ${candidateName}`);
//   // console.log(candidateAnswers)
//   for(let i = 0; i < questions.length; i++){
//     if(candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
//       correct += 1;
//     }
//     console.log(`${i + 1}) ${questions[i]}`);
//     console.log(`Your Answer: ${candidateAnswers[i]}`);
//     console.log(`Correct Answer: ${correctAnswers[i]}`);
//     console.log('\n');
//   }
//   grade = correct / questions.length * 100;
//   if(grade < 80){
//     status = 'FAILED'
//   } else {
//     status = 'PASSED'
//   }
//   console.log(`>>> Overall Grade: ${grade}% (${correct} of ${questions.length} responses correct) <<<`);
//   console.log(`>>> Status: ${status} <<<`);

//   return grade;
// }

// function runProgram() {
//   askForName();
//   // TODO 1.1c: Ask for candidate's name //
//   console.log(`Hi ${candidateName}!`);
//   askQuestion();
//   gradeQuiz(this.candidateAnswers);
// }

// // Don't write any code below this line //
// // And don't change these or your program will not run as expected //
// module.exports = {
//   candidateName: candidateName,
//   question: question,
//   correctAnswer: correctAnswer,
//   candidateAnswer: candidateAnswer,
//   questions: questions,
//   correctAnswers: correctAnswers,
//   candidateAnswers: candidateAnswers,
//   gradeQuiz: gradeQuiz,
//   runProgram: runProgram
// }; 


const input = require('readline-sync');
//
// TODO 2: modify your quiz app to ask 5 questions //
//
// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer /
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [];
let score = 0;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name: ");
  // TODO 1.1c: Greeting //
  //console.log("Hello, Commrade " + candidateName + "!");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question(question);
  //
  
  
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = (input.question("\n" + (i+1) + ") " + questions[i]+" "));
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      score = score + 1;
    }    
    else {
      //console.log(`You are wrong! Your answer ${candidateAnswers} is not correct.`) 
    }
     console.log(`Your Answer: ${candidateAnswers[i]}`);
     console.log(`Correct Answer: ${correctAnswers[i]}`);
     console.log();
  }   
}


function gradeQuiz(candidateAnswers) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    let grade;
    grade = (score/questions.length)*100; 
    if (grade >= 80) {
      status = "PASSED";
    }
    else {
      status = "FAILED";
    } 
    console.log(`>>> OVERALL GRADE: ${grade}% (${score} of ${(questions.length)} responses correct)   <<<\n>>> STATUS:  ${status} <<<`);

//console.log("grade " + grade);
//console.log("typeof " + typeof grade);

    return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  //console.log("Hello, Commrade " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
