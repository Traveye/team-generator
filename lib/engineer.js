const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    if (!name || !id || !email || !github) {
      throw new Error("You must input a name, id, email, and github username to proceed.");
    }
    super(name, id, email);
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return github;
  }
}

module.exports = Engineer;
