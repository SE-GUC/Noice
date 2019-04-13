const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    
    email: {
     type: String,
     required: true
    },
    password: {
     type: String,
      required: true
    },
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
    birthDate: {
        type: String,
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
    phoneNumber:{
      type: String,
      required: true
    },
    typeOfUser:{
        type: String,
        required: true
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
                capacity: Number,
            }]
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