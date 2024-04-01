#! /usr/bin/env node
import inquirer from "inquirer";
const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "Berlin", "London", "Rome"],
        correctanswer: "Paris"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "J.K. Rowling", "Stephen King", "Charles Dickens"],
        correctanswer: "Harper Lee"
    },
    {
        question: "Who was the first President of the United States?",
        choices: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
        correctanswer: "George Washington"
    },
    {
        question: "What does HTML stand for?",
        choices: ["Hyper text Markup Language", "High Tech Machine Learning", "Home Tool Management Language", "Hyperlink and Text Management Language"],
        correctanswer: "Hyper text Markup Language"
    },
    {
        question: "Which programming language is known for its use in developing dynamic web applications?",
        choices: ["Python", "Java", "JavaScript", "C++"],
        correctanswer: "JavaScript"
    },
    {
        question: "In which sport is the term 'ace' commonly used?",
        choices: ["Tennis", "Soccer", "Golf", "Basketball"],
        correctanswer: "Tennis"
    },
    {
        question: "Who holds the record for the most Olympic gold medals of all time?",
        choices: ["Serena Williams", "Usain Bolt", "Michael Phelps", "Simone Biles"],
        correctanswer: "Michael Phelps"
    },
    {
        question: "Which sport is renowned for its popularity in Pakistan and is often referred to as the 'national sport' of the country?",
        choices: ["Cricket", "Field Hockey", "Polo", "Squash"],
        correctanswer: "Cricket"
    },
    {
        question: "Who is the Pakistani cricket legend known as the 'Sultan of Swing' for his exceptional bowling skills?",
        choices: ["Imran Khan", "Wasim Akram", "Shahid Afridi", "Waqar Younis"],
        correctanswer: "Wasim Akram"
    },
    {
        question: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Fe", "Cu"],
        correctanswer: "Au"
    },
    {
        question: "In which year did World War II end?",
        choices: ["1950", "1918", "1939", "1945"],
        correctanswer: "1945"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        choices: ["Saturn", "Venus", "Jupiter", "Mars"],
        correctanswer: "Mars"
    },
];
let score = 0;
async function askQuestion(question, choices, correctanswer) {
    const answer = await inquirer.prompt({
        name: "userAnswer",
        message: question,
        type: "list",
        choices: choices
    });
    const correctIndex = choices.findIndex(option => option === correctanswer);
    if (answer.userAnswer === choices[correctIndex]) {
        console.log("Correct!");
        score++;
    }
    else {
        console.log("Incorrect!");
    }
}
async function runQuiz() {
    console.log("Welcome To The Quiz Game!");
    for (const { question, choices, correctanswer } of questions) {
        await askQuestion(question, choices, correctanswer);
    }
    console.log("Quiz completed! Your score is:", score);
}
runQuiz();
