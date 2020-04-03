const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
    return inquirer.prompt([{
            type: "input",
            name: "Project name",
            massage: "Whai is the project name?"
        },

        {
            type: "input",
            name: "description",
            message: "Descriptions"
        },
        {
            message: "Enter your GitHub username:",
            name: "username"
        },
        {
            type: "input",
            name: "table",
            message: "Table of Contents"
        },
        {
            type: "input",
            name: "installation",
            message: "How to install it?"
        },
        {
            type: "input",
            name: "usage",
            message: "Where can we use it?"
        },
        {
            type: "input",
            name: "license",
            message: "Do you have License?"
        },
        {
            type: "input",
            name: "contributing",
            message: "How did you test this game?"
        },
        {
            type: "input",
            name: "questions",
            message: "Do you have any Questions?"
        },

        {
            type: "input",
            name: "github",
            message: "What is your GitHub URL"
        },
        {
            type: "input",
            name: "mail",
            message: "What is your mail?"
        }

    ]);
}

function generateReadme(answers) {
    return `
   ![version](https://img.shields.io/badge/version-1.2.3-blue)
    
   # My Picture:
   * <a href="https://opencollective.com/shields/sponsor/0/website" target="_blank"><img src="https://avatars3.githubusercontent.com/u/57731190?s=460&u=79ce5852142b8ff112013203ba0481c3fa549f18&v=4"></a>
   # The Project name: 
   ********
    ${answers.name}
   * [MemoryGame](https://github.com/OlgaSadova/MemoryGame) - Project repositorie
   ## The Project description: 
    ${answers.description}
    
   ## Table of content:
     ${answers.table}
   ## Installation:
     ${answers.installation}
   ## Where can use it: 
    ${answers.usage}
   ## Number of license: ${answers.license} 

   ## Any questions: ${answers.questions}
  
   ## My github URL:
   * [GitHub](https://github.com/OlgaSadova) - GitHub

   ## My mail:
   * <sadovaolga1@gmail.com>`;

}
promptUser()
    .then(function(answers) {
        const readme = generateReadme(answers);

        return writeFileAsync("README.md", readme);
    })
    .then(function() {
        console.log("Successfully wrote to README.md");
    })
    .catch(function(err) {
        console.log(err);
    })