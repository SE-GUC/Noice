const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VacancySchema = new Schema({
        careerLevel: {
            type: String,
            required: true
        },
        jobDescription: {
            type: String,
            required: true
        },
        educationLevel: {
            type: String,
            required: true
        },
        partnerId: {
            type: String,
        },
            time : {
                 type : Date, default: Date.now 
                },
        
        skillsRequired: {
            type: String,
            required: true
        },
        applicants: {
            type: Array,
            default: []
        },
        status: {
            type: Boolean,
            default: false
        },
        closed:{
            type:Boolean,
            default:false
        },
        tags:{
            type: Array,
            default: []
        }
    }
)
module.exports = Vacancy = mongoose.model('Vacancy', VacancySchema)
