const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid');

// The calender Model
const CalenderSchema = new Schema({
    Date: {
        type: String,
        required: true
    },
    timings:{
        type:String,
        required:true
        
    },
    Location:{
        type:String,
        required:true
    },
    status: {
        type: String,
        required: true
    },
    id: {
        type: String, 
        default: function genUUID() { uuid.v4() }
    

    }
    
})


module.exports = calender = mongoose.model('calender', CalenderSchema)
