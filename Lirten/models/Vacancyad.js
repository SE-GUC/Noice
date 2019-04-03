const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VacancyadSchema = new Schema({
    vacancyname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    requirments:{
        type: String,
        required: true
    },
    duration: {
        type: String,
        required:true
    },
    salary: {
        type: String,
        required:true
    },
    ownername: {
        type: String,
        required:true
    }, 
    ownerid: {
        type: String,
        required:true
    },
    startdate:{
        type: String,
        required:true
    },
    enddate:{
        type: String,
        required:true
    },
    applied:{
        type: Number
    },
    list:{
        type:[String]
    },
    statue:{
        type: Boolean
    }
})


module.exports = Vacancyad=mongoose.model('vacancyads', VacancyadSchema)