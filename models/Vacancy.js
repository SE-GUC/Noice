const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VacancySchema = new Schema({
        careerLvl: {
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
            type: String,
            required: true
        },
        empID: {
            type: Number,
            required: true
        },
        time: {
            type: Date,
            required: true
        },
        skillsReq: {
            type: String,
            required: true
        },
        jobReq: {
            type: String,
            required: true
        }
    }
)
module.exports = Vacancy = mongoose.model('Vacancy', VacancySchema)