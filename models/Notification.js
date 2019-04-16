const mongoose = require('mongoose')
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
        type: String,
        required: true
    },
    Type: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: true
    }
})

module.exports = Notification = mongoose.model('Notification', NotificationSchema)
