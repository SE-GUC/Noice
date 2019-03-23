const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const RequestSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    Company: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    CareerLevel: {
        type: String,
        required: true
    },
    EducationLevel: {
        type: String,
        required: true
    },
    Salary: {
        type: Number,
        required: true
    },
    Numberofapplicants: {
        type: Number,
    },
    TravelFrequency: {
        type: String,
        required: true
    },
    Vacancies: {
        type: String,
        required: true
    },
    Language: {
        type: String,
        required: true
    },
    ExperienceNeeded: {
        type: String,
        required: true
    },
    JobType: {
        type: String,
        required: true
    },
    DescriptionofJob: {
        type: [String],
        required: true
    },
    JobRequirements:{
        type:[String],
        required: true
    },
    CompanyInformation :{
        type:[String],
    },
    Status :{
        type: String,
        required: true
    }


})

module.exports = Request = mongoose.model('requests', RequestSchema)