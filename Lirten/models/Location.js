const mongoose = require('mongoose')
const uuid = require('uuid');
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
            rate: Number,
            isDepartmentAvailable: [{
                nameOfSubdepartment: String,
                isAvailable: Boolean,
                Capacity: Number,
            }]
        }
    ],
    id: {
        type: String,
        default: function genUID() { uuid.v4()}
    },
})

module.exports = User = mongoose.model('Location', LocationSchema)
