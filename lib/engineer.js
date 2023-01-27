const Employee = require('./employee')

class Engineer extends Employee {
    constructor(github) {
        super(name, id, email);

        this.github = githubUsername;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return githubUsername;
    }
}