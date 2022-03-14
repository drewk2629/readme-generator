// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log('Please enter the title of your project.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please give a description of your project. (Required)',
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log('Please enter a desciption of your project.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What is the installation process for your project? (Required)',
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log('Please enter the installation process for your project.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How will you use this project? (Required)',
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log('Please enter details on how to use your project.');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Choose which license you are using.',
      choices: ['Apache 2.0 License', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0']
    },
    {
      type: 'input',
      name: 'contributers',
      message: 'Who contributed to this project? (Required)',
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log('Please list who contributed to this project.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How do you test this project? (Required)',
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log('Please enter the process for testing your project.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address? (Required)',
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log('Please enter an email address.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your github user name? (Required)',
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log('Please enter your GitHub user name.');
          return false;
        }
      }
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const pageREADME = generatePage(data);
    fs.writeFile(fileName, pageREADME, err => {
      if (err) throw err;
      console.log(err);
      console.log('Page complete! Check out readme-generator.md to see the output!');
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        writeToFile('readme-generator.md', answers)
        console.log(answers)
      })
      .catch((error) => {
        console.log(error)
      });
  }

// Function call to initialize app
init();
