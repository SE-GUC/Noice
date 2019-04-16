const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VacancySchema = new Schema({
        title: {
            type: String,
            required: true
        },    
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
        },
        partnerId: {
            type: String,
        },
        time:{
             type : Date,
              default: Date.now 
            },
        skillsRequired: {
            type: String
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