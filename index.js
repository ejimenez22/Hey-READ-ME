const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs')
const utils = require('utils')

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
    type: ' checkbox',
    name: 'Table of Contents',
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
    name: 'Questions',
    message: 'If you have any questions please contact me at the email below.'
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
