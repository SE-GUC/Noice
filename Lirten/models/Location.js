const mongoose = require('mongoose')
const uuid = require('uuid');
const Schema = mongoose.Schema

const LocationSchema = new Schema({
    NameOfPlace: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    Region: {
        type: String,
        required: true
    },
    Capacity: {
        type: Number,
        required: true
    },
    startingHours: {
        type: String,
        required: true
    },
    endingHours: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
     numberOfWorkingDepartments:{
        type: Number,
        required: true
    },
    workingPlaceDepartments: {
        type: Array,
        required: true},
    
    isAvailble:{
        type: Boolean,
        required:true
    },
    id: {
        type: String,
        default: function genUID() { uuid.v4()}
    },
})

module.exports = User = mongoose.model('Location', LocationSchema)
