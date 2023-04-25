
const fs = require("fs");
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');



const questions = [
  
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  
  {
    type: "input",
    name: "creator",
    message: "What is your GitHub username?",
  },
 
  {
    type: "input",
    name: "title",
    message: "What is the name your Project?",
  },
  
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "MPL2.0", "none"],
  },

  {
    type: "input",
    name: "description",
    message: "Please give a short summary of your project.",
  },
 
  {
    type: "input",
    name: "link",
    message: "What is the URL of your live page?"
  },
  
  {
    type: "input",
    name: "features",
    message: "what are some features about this project?",
  },
  
  {
    type: "input",
    name: "usage",
    message:
      "State the languages or technologies associated with this project.",
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("create README File...");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
}

init();
