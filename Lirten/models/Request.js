const uuid = require('uuid')

// The User Model
class Request {
    constructor(type,recID,sndID,schedTime,vacID,adID) {
        this.type = type;
        this.recID = recID;
        this.sndID = sndID;
        this.schedTime = schedTime;
        this.vacID = vacID;
        this.adID = adID;  
        this.time = new Date();
        this.id = uuid.v4();
    };
};

module.exports = Request