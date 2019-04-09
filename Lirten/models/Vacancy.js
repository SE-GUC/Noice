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
            type: String,
            required: true
        },
        time: {
            type: Date,
            default: Date.now()
        },
        skillsReq: {
            type: String,
            required: true
        },
        jobReq: {
            type: String,
            required: true
        },
        proposals:{
            type:[{
                bid:{
                    type:Number,
                    required:true
                },
                duration:{
                    type:String,
                    required:true
                },
                coverLetter:{
                    type:String,
                    required:true
                },
                attachments:[{
                    type:String,
                    required:false
                }],
                memberId:{
                    type:String,
                    required:true
                }
            }]
        }
    }
)
module.exports = Vacancy = mongoose.model('Vacancy', VacancySchema)