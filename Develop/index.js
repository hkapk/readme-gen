// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


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
    type: 'checkbox',
    message: 'What license(s) does the project have?',
    name: 'license',
    choices: ['MIT', 'Apache', 'Mozilla', 'None']
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



inquirer.prompt(questions);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
