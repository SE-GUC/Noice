
const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
// Create the schema
const EventSchema = new Schema({
    Type: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Participants:[
        {
            type:Number
        }
    ],
    Date:[
        {
            startDate: Date,
            endDate: Date,
            required: true
    }      
    ]
})



module.exports = Event=mongoose.model('events', EventSchema)

