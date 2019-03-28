const mongoose = require('mongoose')
const uuid = require('uuid')
const Schema = mongoose.Schema

// Create the schema
const MesageSchema = new Schema({
    id: {
        type: String,
        default: function genUID() { uuid.v4()}
    },
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
        type: String,
        required: true
    }

})

module.exports = message = mongoose.model('message', MesageSchema)



