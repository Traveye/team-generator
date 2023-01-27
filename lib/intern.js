const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    if (!name || !id || !email || !school) {
      throw new Error(
        "You must input a name, id, email, and school to proceed."
      );
    }
    super(name, id, email);

    this.school = school;
  }

  getRole() {
    return "Intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
