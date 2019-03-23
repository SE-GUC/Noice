const mongoose = require('mongoose')
const uuid = require('uuid');
const Schema = mongoose.Schema

const VacancySchema = new Schema({
    careerLevel: {
        type: String,
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
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    skillsReq: {
        type: Number,
        required: true
    },
    jobReq:{
        type: Number,
        required: true
    },
    id: {
        type: String,
        default: function genUID() { uuid.v4()}
    },
})

module.exports = User = mongoose.model('Vacancy', VacancySchema)