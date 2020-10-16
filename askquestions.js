const inquirer = require('inquirer');

//this function will prompt the questions  and return the data
function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title?"
      },
      {
        type: "input",
        name: "description",
        message: "Enter a description:"
      },
      {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?"
      },
      {
        type: "input",
        name: "usage",
        message: "What is the usage information?"
      },
      {
        type: "input",
        name: "contribution",
        message: "Enter the contribution guidelines:"
      },
      {
        type: "input",
        name: "tests",
        message: "Enter the test instructions:"
      },
      {
        type: "list",
        name: "license",
        choices: ["MIT license", 
        "Apache License 2.0", 
        "GNU General Public License (GPL)", 
        "Mozilla Public License 2.0", 
        "Common Development and Distribution License", 
        "Eclipse Public License version 1.0"]
      },
      {
        type: "input",
        name: "github",
        message: "Enter your github username:"
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address:"
      }
    ]);
  }

  module.exports = {
    promptUser
  };
