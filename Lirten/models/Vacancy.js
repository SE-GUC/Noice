const uuid = require('uuid')

// The User Model
class Vacancy {
    constructor(careerLvl, jobDesc,jobTyp,educLvl,  empID, skillsReq, jobReq ) {
        this.careerLvl = careerLvl;
        this.jobDesc = jobDesc;
        this.jobTyp = jobTyp;
        this.educLvl = educLvl;
        this.empID = empID;
        this.time = new Date();
        this.skillsReq = skillsReq;
        this.jobReq = jobReq;
        this.id = uuid.v4();
    };
};

module.exports = Vacancy