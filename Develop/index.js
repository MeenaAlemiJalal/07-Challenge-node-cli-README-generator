// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generate = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
var questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Project Description?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Project Usage?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'contributing',
  },
  {
    type: 'input',
    name: 'email',
    message: 'For questions(email)?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'For questions(github)?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'License?',
    choices: ['MIT', 'ISC', 'GNUGPLv3'],
    filter(val) {
      return val.toLowerCase();
    },
  },
];

// A function that get answers from the user
async function runQuery() {
  return inquirer.prompt(questions)
    .then(function (answers) {
      return answers
    })
    .catch(function (err) {
      console.log(err)
    })
}

// A function to write README file
async function writeToFile() {
  const answers = await runQuery()
  const markdown = generate.generateMarkdown(answers)
  fs.writeFile('README.md', markdown, function (err) {
    if (err) {
      console.log("Couldn'nt save content to file")
    } else {
      console.log('Success: new README.md generated inside the current folder')
    }
  })
}

// initialize app
function init() {
  writeToFile()
}

// Function call to initialize app
init();
