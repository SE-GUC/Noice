const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
      type: String,
      required: true
  },
  interests: {
      type: String,
      required: true
  },
  pastEvents: 
    [
      {
          
          name:String,
          startDate: String,
          endDate: String
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
    }
})
module.exports = Member = mongoose.model('member', memberSchema)

