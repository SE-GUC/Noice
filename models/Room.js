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
                default: 'REQUESTED'
            },
            startDate:{
                type:String,
                required:true
            },                 
            endDate:{
                type:String,
                required:true
            },
            reserverId:{
                type:String,
                required:true
            }
        }],
        tags:{
            type: Array,
            default: []
        }
   
}
})

module.exports = Room = mongoose.model('Room', RoomSchema)
