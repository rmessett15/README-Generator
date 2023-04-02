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
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Add the description of your project:",
      name: "description",
    },
    {
      type: "input",
      message: "Add the installation instructions of your project:",
      name: "installation",
    },
    {
      type: "input",
      message: "Add the usage information of your project:",
      name: "usage",
    },
    {
      type: "input",
      message: "Add the contribution guidelines of your project:",
      name: "contribution",
    },
    {
      type: "input",
      message: "Add the test instructions of your project:",
      name: "test",
    },
    {
      type: "input",
      message: "What is your GitHub handle?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
  ])
  .then((data) => {
    // const filename = `${data.name.toLowerCase().split(' ').join(' ')}.json`;

    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    // err ? console.log(err) : console.log('Success!')
    // );

    writeToFile("testReadMe.md", data);
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
    fileText += `## Description\n\n${data.description}\n\n`
    fileText += `## Installation\n\n${data.installation}\n\n`
    fileText += `## Usage Information\n\n${data.usage}\n\n`
    fileText += `## Contribution Guidelines\n\n${data.contribution}\n\n`
    fileText += `## Test Instructions\n\n${data.test}\n\n`
    fileText += `## Questions\n\nHave additional questions? Click the links below to reach me through my GitHub account or Email address.\n\n`
    fileText += `[Link to Github](https://github.com/${data.github})\n\n`
    // Need to figure out how to create link so when user clicks link it opens up a new email with my email address already inserted as the recipient
    fileText += `[Link to Email](${data.email})\n\n`
    fs.writeFile(fileName, fileText, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// --------------------------------------------------
// Need to add licensing feature
// Need to fix email link
// Look into utilizing the rest of the starter code in some way
// Make a README.md
// Screen record project
// Comment and clean up code (get rid of log.txt file and ryan.json file)
// --------------------------------------------------