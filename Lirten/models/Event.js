
const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
// Create the schema
const EventSchema = new Schema({
    Name: {
        type:String,
        required: true
    },
    Owner: {
        type: String,
        required :true
    },
    Type: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Participants: {
            type: Number,
            default: 0
        },
    Date:[
        {
            startDate:Date,
            endDate:Date
    }      
    ]
})



module.exports = Event=mongoose.model('events', EventSchema)

