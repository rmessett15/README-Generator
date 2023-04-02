// TODO: Include packages needed for this application

const inquirer = require('inquirer');

// --------------------------------------------------
const fs = require('fs');

const name = require("./ryan.json");

// process.argv[2] = response;

// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your GitHub handle?',
        name: 'github',
    }
  ])
  .then((data) => {
    // const filename = `${data.name.toLowerCase().split(' ').join(' ')}.json`;

    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    // err ? console.log(err) : console.log('Success!')
    // );

    writeToFile('testReadMe.md', data);
  });
// --------------------------------------------------

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var fileText = "";
    fileText += `${data.name}'s README\n\n`
    fileText += ` # ${data.title}\n\n`
    fileText += `## Table of Contents\n\n`
    fileText += `* [Description](#description)\n\n * [Installation](#installation)\n\n * [Usage-Information](#usage-information)\n\n * [Contribution-Guidelines](#contribution-guidelines)\n\n * [Test-Instructions](#test-instructions)\n\n * [Questions](#questions)\n\n`
    fileText += `## Description\n\n`
    fileText += `## Installation\n\n`
    fileText += `## Usage Information\n\n`
    fileText += `## Contribution Guidelines\n\n`
    fileText += `## Test Instructions\n\n`
    fileText += `## Questions\n\n`
    fileText += `[Link to Github](https://github.com/${data.github})\n\n`
    fs.writeFile(fileName, fileText, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();