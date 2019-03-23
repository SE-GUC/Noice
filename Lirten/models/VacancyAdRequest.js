const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const VacancyAdRequestSchema = new Schema({
    careerLvl: {
        type: Number,
        required: true
    },
    jobDesc: {
        type: String,
        required: true
    },
    jobTyp: {
        type: String,
        required: true
    },
    educLvl: {
        type: Number,
        required: true 
    },
    empID: {
        type: Number,
        required: true
    },
    time: {
        type: Date,
    },
    skillsReq: {
        type: String, 
        required: true
    },
    jobReq: {
        type: String, 
        required: true
    }
})

module.exports = VacancyAdRequest = mongoose.model('vacancyAdRequest', VacancyAdRequestSchema)