const uuid = require('uuid');

class Notification
{
    constructor(from, to, time, type, description)
    {
        this.from = from;
        this.to = to;
        this.time = time;
        this.type = type;
        this.description = description;
        this.id = uuid.v4();
    }
}

module.exports = Notification;