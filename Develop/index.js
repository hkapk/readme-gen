// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require("util");

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide the installation requirements for your project.'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide the usage requirements for your project.'
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'What are the contribution guidelines for this project?'
  },
  {
  type: 'input',
  name: 'tests',
  message: 'Please provide the test instructions for this project.'
  },
  {
    type: 'checkbox',
    message: 'What license(s) does the project have?',
    name: 'license',
    choices: ['MIT', 'Apache_2.0', 'MPL-2.0', 'None']
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err)
        } else {
            console.log("you have created a ReadMe file");
        }
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)


    .then(function(data) {
        writeToFile("README.md", generateMarkdown (data));    
})
}

// Function call to initialize app
init();
