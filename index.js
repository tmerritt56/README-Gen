// TODO: Include packages needed for this application.
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of your project?",
},{
    type: "input",
    name: "description",
    message: "Please input a description about your project.",
},{
    type: "input",
    name: "installation",
    message:"Please describe how this would be installed.",
}, {
    type: "input",
    name: "usage",
    message: "How is this project meant to be used?",
},{
    type: "input",
    name: "contributing",
    message: "How does one contribute to your project?",
}, {
    type: "input",
    name: "test",
    message: "How will this be tested?",
}, {
    type: "list",
    name: "license",
    message: "Which license are you picking?",
    choices: ["Apache","MIT","BSD 3", "no license"]
}, {
    type: "input",
    name: "user",
    message: "What is your github username?",
}, {
    type: "input",
    name: "email",
    message: "What is your email?",
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("README.md created successfully!") 
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data)=>
        writeToFile("README.md", generateMarkdown(data)));
    }

// Function call to initialize app
init();
