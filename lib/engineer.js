const Employee = require('./employee')

class Engineer extends Employee {

    constructor(id, email, name, github) {

        super(id, email, name, 'Engineer');
        this.id = id;
        this.email = email;
        this.name = name;
        this.role = 'Engineer';
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getSpecial() {
        return this.github
    }
}



module.exports = Engineer;

