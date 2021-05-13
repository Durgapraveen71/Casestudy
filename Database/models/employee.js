const mongoose = require('mongoose');

var  Employee = mongoose.model('Employee',{
    Sno: { type : Number},
     TrainNumber :{ type: Number},
     TrainName : {type: String},
      From : {type: String},
      To : {type: String},
      Timing : {type: Number},
      ReservationAvailable : {type: String},
      SpecialTrips : {type: String}

});
module.exports = { Employee };