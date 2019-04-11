const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoomSchema = new Schema({
    capacity:{
        type:Number,
        required:true
    },
    isAvailable:{
        type: Boolean,
        default:true
    },
    locationId:{
        type:String,
        required:true
    },
    reservations:{
      
            type:[{state:{
                type:String,
                default: 'UNRESERVED'
            },
            startDate:{
                type:Date,
                required:true
            },                 
            endDate:{
                type:Date,
                required:true
            },
            reserverId:{
                type:String,
                required:true
            }
        }],
        
   
}
})

module.exports = Room = mongoose.model('Room', RoomSchema)