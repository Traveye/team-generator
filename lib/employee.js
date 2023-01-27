class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return name;
    }

    getId() {
        return id;
    }

    getRole() {
        return "Employee";
    }

}

module.exports = Employee;