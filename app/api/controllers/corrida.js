const corrida = require('../models/corrida');

module.exports = {
    getById: function(req, res, next) {
        console.log(req.body);
        corrida.findById(req.params.id, function(err, result){
            if (err) {
                next(err);
            } else {
                res.json({status:"success", message: "corrida found!!!", data:{ result }});
            }
        });
    },
    getAll: function(req, res, next) {
        corrida.find({}, function(err, result){
            if (err){
                next(err);
            } else {
                res.json({status:"success", message: "corrida list found!!!", result });
                // res.json(data);
           }
        });
    },
    updateById: function(req, res, next) {
        corrida.findByIdAndUpdate(req.params.id, req.body.name, function(err, result){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "corrida updated successfully!!!", data:null});
            }
        });
    },
    deleteById: function(req, res, next) {
        corrida.findByIdAndRemove(req.params.id, function(err, result){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "corrida deleted successfully!!!", data:null});
            }
        });
    },
    create: function(req, res, next) {
        corrida.create( req.body, function (err, result) {
            if (err) 
                next(err);
            else
                res.json({status: "success", message: "corrida added successfully!!!", data: null});      
        });
    },
}