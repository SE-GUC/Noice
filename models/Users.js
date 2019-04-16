const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    
    email: {
     type: String
    
    },
    password: {
     type: String
    },
   firstName: {
        type: String
   },
   middleName: {
    type: String
   },
   lastName: {
    type: String
   },  
    birthDate: {
        type: String
    },
    gender: {
        type: String
    },
    address:{
      type: String
    },
    phoneNumber:{
      type: String
    },
    typeOfUser:{
        type: String
    },
    companyName: {
        type: String,
    },
    companyLocation: {
        type: String,
      
    },
    partners:[
        {
            id:String
        }
    ],
    events:[
        {
            id:String,
            name:String,
            startDate: String,
            endDate: String
    }      
    ],
    vacancies:[
        {
            id:String
        }
    ],
    projects:[
        {
            id:String,
            name:String,
            startDate: String,
            endDate: String
        }
    ]
    ,
    field: {
        type: String,
    },
    NameOfPlace: {
        type: String,
    },
    workingPlaceDepartments: [
        {
            nameOfDepartments: String,
            City: String,
            Region: String,
            startTime: String,
            endTime: String,
            rate: Number
        }
    ],
    skills: {
        type: String,
    },
    interests: {
        type: String,
    },
    pastEvents: 
      [
        {
            name:String,
            startDate: String,
            endDate: String
        }
    ],
    appliedVacancy: {
        type: Array,
        default:[]
    },
    projectsCompleted:{
      type: String,
    },
    reviewsReceived: {
      type: String,
    },
    certificatesHeld:{
      type: String,
    }
   
})

module.exports = User=mongoose.model('users', userSchema)