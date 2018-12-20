const salto = require('../models/salto');

module.exports = {
    getById: function(req, res, next) {
        console.log(req.body);
        salto.findById(req.params.id, function(err, result){
            if (err) {
                next(err);
            } else {
                res.json({status:"success", message: "salto found!!!", data:{ result }});
            }
        });
    },
    getAll: function(req, res, next) {
        salto.find({}, function(err, result){
            if (err){
                next(err);
            } else {
                res.json({status:"success", message: "salto list found!!!", result });
                // res.json(data);
           }
        });
    },
    updateById: function(req, res, next) {
        salto.findByIdAndUpdate(req.params.id, req.body.name, function(err, result){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "salto updated successfully!!!", data:null});
            }
        });
    },
    deleteById: function(req, res, next) {
        salto.findByIdAndRemove(req.params.id, function(err, result){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "salto deleted successfully!!!", data:null});
            }
        });
    },
    create: function(req, res, next) {
        salto.create( req.body, function (err, result) {
            if (err) 
                next(err);
            else
                res.json({status: "success", message: "salto added successfully!!!", data: null});      
        });
    },
}