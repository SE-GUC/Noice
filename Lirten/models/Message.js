const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MesageSchema = new Schema({

    senderID: {
        type: String,
        required: true
    },
    receiverID: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }

})

module.exports = message = mongoose.model('message', MesageSchema)



