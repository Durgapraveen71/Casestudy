const mongoose = require('mongoose');


//schema for reain schedule
//var TrainSchedule = mongoose('TrainSchedule, {)
var  Employee = mongoose.model('Employee',{
    Sno: { type : Number},
     TrainNumber :{ type: Number},
     TrainName : {type: String},
      From : {type: String},
      To : {type: String},
      Timing : {type: Number},
      ReservationAvailable : {type: String},
      SpecialTrips : {type: String},
      TicketPrice :  {type: Number}

});
//module.exports = {TrainSchedule};
module.exports = { Employee };
