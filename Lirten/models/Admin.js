const uuid = require('uuid');

class Admin {
    constructor(firstName,middleName,lastName,education,age){
        this.firstName=firstName;
        this.middleName= middleName;
        this.lastName=lastName;
        this.active=true;
        this.education=education;
        this.id=uuid.v4();
        this.age = age;
    };
}
module.exports = Admin