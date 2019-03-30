const mongoose = require('mongoose')
const uuid = require('uuid');
const Schema = mongoose.Schema

const NotificationSchema = new Schema({
    From: {
        type: String,
        required: true
    },
    To: {
        type: String,
        required: true
    },
    Time: {
        type: Date,
        required: true
    },
    Type: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String
    },
    id: {
        type: String,
        default: function genUID() { uuid.v4()}
    }
})

module.exports = Notification = mongoose.model('Notification', NotificationSchema)
