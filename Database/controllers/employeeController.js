const express = require('express');
const { ObjectUnsubscribedError } = require('rxjs');
var router = express.Router();

var { Employee } = require('../models/employee');

//=>localhost.3000/trainschedules/
router.get('/', (req,res) =>{
      Employee.find((err, docs)=>{
          if(!err) { res.send(docs);}
          else {console.log('Error in retrieving Schedule:' + JSON.stringify(err, undefined, 2));}
      });
});

router.get('/:id',(req, res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id: ${req.params.id}');
    
    Employee.findById(req.params.id, (err, doc)=>{
        if(!err) { res.send(doc);}
        else {console.log('Error in Retriving Schedule :' + JSON.stringify(err,undefined, 2));}
    });
    
});


//for employee
router.post('/',(req,res)=>{

  var emp = new Employee({
    Sno: req.body.Sno,
    TrainNumber :req.body.TrainNumber,
    TrainName : req.body.TrainName,
     From : req.body.From,
     To : req.body.To,
     Timing : req.body.Timing,
     ReservationAvailable : req.body.ReservationAvailable,
     SpecialTrips :req.body.SpecialTrips,
  });
  emp.save((err, doc) =>{
      if(!err){res.send(doc); }
      else {console.log('Error in Schedule save:' + JSON.stringify(err, undefined, 2));}
  });
});
router.put('/:id', (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id: ${req.params.id}');

     var emp = {
        Sno: req.body.Sno,
        TrainNumber :req.body.TrainNumber,
        TrainName : req.body.TrainName,
         From : req.body.From,
         To : req.body.To,
         Timing : req.body.Timing,
         ReservationAvailable : req.body.ReservationAvailable,
         SpecialTrips :req.body.SpecialTrips,

     };
     Employee.findByIdAndUpdate(req.params.id, {$set: emp}, {new: true}, (err, doc)=> {
   
        if(!err) { res.send(doc);}
        else { console.log('Error in Schedule Update:' + JSON.stringify(err, undefined, 2));}
     });
});
router.delete('/:id', (req, res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');

    Employee.findByIdAndRemove(req.params.id,(err,doc) =>{

        if(!err) { res.send(doc);}
        else { console.log('Error in Schedule Delete' + JSON.stringify(err, undefined, 2));}
    });

});



module.exports = router;