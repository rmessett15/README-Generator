# <Creating README Generator: Week-9-Challenge (Node.js)>

## Description

This application was created using node.js to generate professional README.md docs from the command line, and aims to cut down on the amount of time developers are using to write their README.md files. This way more of their time can be devoted to creating, maintaining, and updating their applications. By the use of inquirer (node package manager) this application takes the user through a series of prompts, asking them their name, title of their application, application description, installation instructions, usage information, contribution guidelines, test instructions, what type of license they want their application to be covered under, as well as their GitHub handle, and primary email. Once all prompts are answered, the application generates a professional README.md markdown file with the users inputs. This was the first application I have created using a backend technology (node.js), and gave me greater insight into the way back end developers problem solve without the use of a user interface or live browser. Through building this application I learned how to import the libraries inquirer and file system into a node application, the use of prompts within the command line, template literals and arrow functions (ES6 syntax), and continued to build on all previous programming knowledge I have gained so far (for this application, mainly the utilization of conditionals statements).

## Live Screen Recording of Application Functionality

https://drive.google.com/file/d/1-yTwG9N9cu03-j2zaN_i6khW7zMWgJ6z/view

## Screenshots

![Screenshot1-week-9-challenge](https://user-images.githubusercontent.com/120127903/229926082-da5e5a74-8bbb-403b-833f-7b999655b30c.png)

![Screenshot2-week-9-challenge](https://user-images.githubusercontent.com/120127903/229926100-84740f01-645c-42ff-b132-a3a48b41b3a2.png)

![Screenshot3-week-9-challenge](https://user-images.githubusercontent.com/120127903/229926112-20b9f9db-c7c7-4725-8726-d175fb4bf581.png)

![Screenshot4-week-9-challenge](https://user-images.githubusercontent.com/120127903/229926139-f971f44c-ebee-41a2-8c1c-a0f699bc1bd9.png)

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

Worked with a close friend of mine within the developer community to pseudo-code this application outline (Brian Dillman). Also met with a tutor, (Phillip Loy) to work through appending the licensing badges to the README.md document, as well as on some errors I was having with my anchor tags providing the proper link to the users email input.

## Features

Features of this application include the users ability to generate a professional README.md document straight from the command line. The user will answer a series of prompts about their application, and then a README.md markdown file will be generated based on their responses. Features within the README.md file include a licensing badge which will be appended near the top of the page based on what license the user would like their application to be covered under. As well as a table of contents which includes links to the various sections of the README.md document, that when clicked take the user to the corresponding section. Lastly their is a questions section at the bottom of the generated README.md document where links to the application authors GitHub and email are provided (when clicked, the user will be taken to the authors GitHub account, or to a blank email document where the author is automatically entered as the recipient).

## How to Contribute

Open to collaboration, if you choose to do so open an issue and modify any changes you would like to see on a feature branch and wait for approval before merging to the main branch.