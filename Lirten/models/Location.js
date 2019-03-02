const uuid = require('uuid')

class Location {
    constructor(NameOfPlace,City,Region,Capacity,startingHours,endingHours,rate){
        this.NameOfPlace = NameOfPlace;
        this.City = City;
        this.Region = Region;
        this.Capacity = Capacity;
        this.startingHours = startingHours;
        this.endingHours = endingHours;
        this.rate = rate;
        this.id = uuid.v4();
    }
}
module.exports = Location