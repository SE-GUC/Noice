const uuid = require('uuid');

// The calender Model
class calender {
    constructor(Date, timings,Location,status) {
        this.Date = Date;
        this.timings = timings;
        this.Location = Location;
        this.status=status;
        this.id=uuid.v4();
    };
};

module.exports = calender
