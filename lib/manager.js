const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        if (!name || !id || !email || !officeNum) {
            throw new Error("You must input a name, id, email, and office number to proceed.");
          }
        super(name, id, email);
        this.officeNum = officeNum;
    }

    getOffice() {
        return this.officeNum;
    }

    getRole() {
        return "Manager";
    }

}

module.exports = Manager;