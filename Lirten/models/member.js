const mongoose = require('mongoose')
const uuid = require("uuid"); 
const Schema = mongoose.Schema
///dah el model
const memberSchema = new Schema({

   name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address:{
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phoneNumber:{
      type: String,
      required: true
    },
    skills: {
      type: [String],
      required: true
  },
  interests: {
      type: String,
      required: true
  },
  pastEvents: 
    [
      {
          id:String,
          name:String,
          startDate: Date,
          endDate: Date
      }
  ],
  projectsCompleted:{
    type: String,
    required: true
  },
  reviewsReceived: {
    type: String,
    required: true
  },
  certificaesHeld:{
    type: String,
    required: true
    },
    id: {
        type: String,
        default: function genUID() { uuid.v4()}
    },
})
module.exports = Member = mongoose.model('member', memberSchema)

