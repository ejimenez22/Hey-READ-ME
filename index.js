const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs')

// question array
const questions = [{
    type: 'input',
    name: 'Title',
    message: 'What is your projects title?'
}, 
{
    type: 'input',
    name: 'Description',
    message: 'Please give a detailed description of the project.'
},
{
    type: 'checkbox',
    name: 'tableOfContents',
    message: 'Table of Contents',
    choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests']
},
{
    type: 'input',
    name: 'Installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
},
{
    type: 'input',
    name: 'Usage',
    message: 'Provide instructions and examples for use.'
},
{
    type: 'input',
    name: 'License',
    message: 'What License is being used?'
},
{
    type: 'input',
    name: 'Contributing',
    message: 'Who contributed to this project?'
},
{
    type: 'input',
    name: 'Tests',
    message: 'Provide examples on how to run application.'
},
{
    type: 'input',
    name: 'Github',
    message: 'Please provide a link to your Github profile.'
},
{
    type: 'input',
    name: 'Email',
    message: 'Please provide your email address for additional questions.'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writetoFile(fileName, data, function(err) {
        if (err) {
            return console.log("error")
        } else {
            console.log("Your README is ready!")
        }
    } )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
