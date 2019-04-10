const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    }
    
})


module.exports = calender = mongoose.model('calender', CalenderSchema)
