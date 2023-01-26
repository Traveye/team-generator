//linking dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');

//first a questionairre using prompt we have 4 employee cats with 4 diff question tracks

inquirer.prompt ([
    {
        name: mngrName,
        message: "Please enter the team manager's name."
    },
    {
        name: mngrId,
        message: "Please enter the team manager's ID."
    },
    {
        name: mngrEmail,
        message: "Please enter the team manager's email address."
    },
    {
        name: officeNum,
        message: "Please enter the team manager's office number."
    },
    {
        type: 'list',
        name: role,
        message: "Please select a role from the options below:",
        choices: ['Manager', 'Employee', 'Engineer', 'Intern']
    },

]);

// then we use fs to generate the the html file - need template to add in info

// once the html page is open, i should be able to click on each email or ghub username to open either the email in defaul email app or ghub in new tab.
