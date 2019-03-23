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
    totalmeter: {
        type: Number,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    ownername: {
        type: String,
        required:true
    }
})


module.exports = Vacancyad=mongoose.model('vacancyad', VacancyadSchema)
