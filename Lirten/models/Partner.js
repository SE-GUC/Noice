const uuid = require('uuid')
class Partner {
    constructor(name, age,field,companyname,companylocation,occupation,partners,events,vacancies,projects,feedbackform) {
        this.name=name;
        this.age=age;
        this.field=field;
        this.companyname=companyname;
        this.companylocation=companylocation;
        this.occupation=occupation;
        this.partners=partners;
        this.events=events;
        this.vacancies=vacancies;
        this.projects=projects;
        this.feedbackform=feedbackform;
        this.id = uuid.v4();
    };
}

module.exports = Partner