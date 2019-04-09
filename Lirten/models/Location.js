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
            startTime: Date,
            endTime: Date,
            rate: Number,
            isDepartmentAvailable: [{
                nameOfSubdepartment: String,
                isAvailable: Boolean,
                capacity: Number,
            }]
        }
    ]
   
})

module.exports = Location = mongoose.model('Location', LocationSchema)
