const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LocationSchema = new Schema({
    NameOfPlace: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    workingPlaceDepartments: [
        {
            nameOfDepartments: String,
            City: String,
            Region: String,
            startTime: String,
            endTime: String,
            rate: Number
        }
    ]
   
})

module.exports = User = mongoose.model('Location', LocationSchema)