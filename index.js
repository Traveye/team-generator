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

// generate team cards


// then we use fs to generate the the html file - need template to add in info

html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Team Builder</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
    />
  </head>
  <body>
    <section class="hero is-small is-link">
      <div class="hero-body has-text-centered">
        <p class="title">My Team</p>
      </div>
    </section>
    <section class="section">
      <div class="container d-flex">
        ${'cards'}
      </div>
    </section>
  </body>
</html>
`


// once the html page is open, i should be able to click on each email or ghub username to open either the email in defaul email app or ghub in new tab.
