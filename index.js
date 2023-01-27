//linking dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

//get initial manager details
function init() {
  inquirer
    .prompt([
      {
        name: 'name',
        message: "Please enter the team manager's name.",
      },
      {
        name: 'id',
        message: "Please enter the team manager's ID.",
      },
      {
        name: 'email',
        message: "Please enter the team manager's email address.",
      },
      {
        name: 'officeNum',
        message: "Please enter the team manager's office number.",
      },
    ])
    .then((answers) => {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
      menu();
    });
}

//this menu allows to select to add new members or to finalize
function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: 'role',
        message:
          "To add to your team, please select a role from the options below or click finish to get your final team page:",
        choices: ["Engineer", "Intern", "Finish"],
      },
    ])
    .then((answers) => {
      if (answers.role === "Finish") {
        console.log("done");
      } else if (answers.role === "Engineer") {
        addEngineer();
      } else {
        addIntern();
      }
    });
}

//builds engineer obj
function addEngineer() {
  inquirer
    .prompt([
      {
        name: 'name',
        message: "Please enter the engineer's name.",
      },
      {
        name: 'id',
        message: "Please enter the engineers ID.",
      },
      {
        name: 'email',
        message: "Please enter the engineer's email address.",
      },
      {
        name: 'github',
        message: "Please enter the engineer's github username.",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    });
}
//build intern obj
function addIntern() {
  inquirer
    .prompt([
      {
        name: 'name',
        message: "Please enter the intern's name.",
      },
      {
        name: 'id',
        message: "Please enter th intern's ID.",
      },
      {
        name: 'email',
        message: "Please enter the intern's email address.",
      },
      {
        name: 'school',
        message: "Please enter the intern's school.",
      },
    ])
    .then((answers) => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    });
}

// function buildCards() {}

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
        ${"cards"}
      </div>
    </section>
  </body>
</html>
`;

// once the html page is open, i should be able to click on each email or ghub username to open either the email in defaul email app or ghub in new tab.

init();
