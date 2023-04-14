// Inquirer (node package manager) import
const inquirer = require("inquirer");

// File system module (node package manager) import
const fs = require("fs");

// This function writes the users README file using user input
function writeToFile(fileName, data) {
  var fileText = "";
  // Users name
  fileText += `${data.name}'s README\n\n`;
  // Users README title
  fileText += ` # ${data.title}\n\n`;
  // Licensing badge
  fileText += `${generateLicense(data.license)}\n\n`;
  // Table of contents
  fileText += `## Table of Contents\n\n`;
  // Links to sections within the table of contents
  fileText += ` * [Description](#description)\n\n * [Installation](#installation)\n\n * [Usage-Information](#usage-information)\n\n * [Contribution-Guidelines](#contribution-guidelines)\n\n * [Test-Instructions](#test-instructions)\n\n * [License](#license)\n\n * [Questions](#questions)\n\n`;
  // Description section
  fileText += `## Description\n\n${data.description}\n\n`;
  // Installation section
  fileText += `## Installation\n\n${data.installation}\n\n`;
  // Usage information section
  fileText += `## Usage Information\n\n${data.usage}\n\n`;
  // Contribution guidelines section
  fileText += `## Contribution Guidelines\n\n${data.contribution}\n\n`;
  // Test instructions section
  fileText += `## Test Instructions\n\n${data.test}\n\n`;
  // License section (complete with NOTICE)
  fileText += `## License\n\nNOTICE: This application is covered under the ${data.license}\n\n`;
  // Questions section
  fileText += `## Questions\n\nHave additional questions? Click the links below to reach me through my GitHub account or Email address.\n\n`;
  // Link to users GitHub
  fileText += `[Link to Github](https://github.com/${data.github})\n\n`;
  // Link to users email
  fileText += `<a href="mailto:${data.email}">${data.email}</a>\n\n`;
  // Utilizing the file system write file method to generate the users README.md doc along with error handling, that tells the user "Success!" within the terminal when README is successfully generated or logs any errors to the console
  fs.writeFile(fileName, fileText, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// This function handles the licensing badges
function generateLicense(license) {
  // MIT License
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    // Apache 2.0 License
  } else if (license === "Apache 2.0 License") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    // IBM Public License Version 1.0
  } else if (license === "IBM Public License Version 1.0") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    // Mozilla Public License 2.0
  } else if (license === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    // Unlicense
  } else {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
}

// This function initializes the application and generates user prompts using inquirer
function init() {
  inquirer
    .prompt([
      // User name input
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      // User README title input
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      // User README description input
      {
        type: "input",
        message: "Add the description of your project:",
        name: "description",
      },
      // User README installation instructions input
      {
        type: "input",
        message: "Add the installation instructions of your project:",
        name: "installation",
      },
      // User README usage information input
      {
        type: "input",
        message: "Add the usage information of your project:",
        name: "usage",
      },
      // User README contribution guidelines input
      {
        type: "input",
        message: "Add the contribution guidelines of your project:",
        name: "contribution",
      },
      // User README test instructions input
      {
        type: "input",
        message: "Add the test instructions of your project:",
        name: "test",
      },
      // User README licensing options
      {
        type: "list",
        message: "Select the type of license you would like for your project:",
        choices: [
          "MIT",
          "Apache 2.0 License",
          "IBM Public License Version 1.0",
          "Mozilla Public License 2.0",
          "The Unlicense",
        ],
        name: "license",
      },
      // User github handle input
      {
        type: "input",
        message: "What is your GitHub handle?",
        name: "github",
      },
      // User email handle input
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
    ])
    // .then takes the user inputs from the prompts answered above and injects them into the writeToFile function, therefore generating a "sample-README.md" file with the users inputs
    .then((data) => {
      writeToFile("sample-README.md", data);
    });
}

// Function call to initialize app
init();