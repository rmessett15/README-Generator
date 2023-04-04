# <Creating README Generator: Week-9-Challenge (Node.js)>

## Description

This application was created using node.js to generate professional README.md docs from the command line, and aims to cut down on the amount of time developers are using to write their README.md files. This way more of their time can be devoted to creating, maintaining, and updating their applications. By the use of inquirer (node package manager) this application takes the user through a series of prompts, asking them their name, title of their application, application description, installation instructions, usage information, contribution guidelines, test instructions, what type of license they want their application to be covered under, as well as their GitHub handle, and primary email. Once all prompts are answered, the application generates a professional README.md markdown file with the users inputs. This was the first application I have created using a backend technology (node.js), and gave me greater insight into the way back end developers problem solve without the use of a user interface or live browser. Through building this application I learned how to import the libraries inquirer and file system into a node application, the use of prompts within the command line, template literals and arrow functions (ES6 syntax), and continued to build on all previous programming knowledge I have gained so far (for this application, mainly the utilization of conditionals statements).

## Screenshot

![Screenshot-week-6-challenge](https://user-images.githubusercontent.com/120127903/226476502-3a8bce9e-6816-4d7a-a7b6-10dd59a2cd8a.png)

## Technologies Used

This project is powered by Node.js v16, and utilizes the inquirer v8.2.4 (node package manager), and file system module (node package manager).

## Installation

1. Clone the repo:
   git clone https://github.com/rmessett15/README-Generator.git

2. Open in VS Code. If you do not have VS code you must install it.

3. Using the terminal, install node.js v16. If you have homebrew, the command should look like the following (brew install node@16), however this may vary and the documentation should be consulted.

4. Once node.js v16 is installed, in the terminal, utilize the command npm init -y to initialize and create a package where project files will be stored.

5. Next, use the terminal to run the command npm i inquirer@8.2.4 to install v8.2.4 of the inquirer.

6. To run the application, within the terminal, type the command node index.js.

## Credits

Worked with a close friend of mine within the developer community to pseudo-code challenge outline (Brian Dillman). Also worked with a tutor (Robert Kurle Jr.) to finalize re-appending current city, date, and icon to the page as well as finding a way to kill my recently searched buttons multiplying themselves when clicked.

## Features

Features of this page include the users ability to load weather data from any city of their choosing and see real time data displayed to their page of the current conditions along with a 5 day forecast. Once a city has been searched for, the data attributed with that city will be stored in local storage and can then be re-appended to the page using the recent search buttons, which will allow data to be pulled from local storage rather than fetching from the API again (this will limit the amount of times the user will hit the API).

## How to Contribute

Open to collaboration, if you choose to do so open an issue and modify any changes you would like to see on a feature branch and wait for approval before merging to the main branch.
