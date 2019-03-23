const mongoose = require('mongoose')
const Schema = mongoose.Schema
///dah el model
const adminSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number, 
        required: true
    },
    education:{
        type:[String]
    },
    active: {
        type: Boolean,
    },
    deactivationDate:{
        type: Date
    }
})
module.exports = Admin = mongoose.model('admins', adminSchema)