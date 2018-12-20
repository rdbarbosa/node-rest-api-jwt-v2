const resistencia = require('../models/resistenciaAbs');

module.exports = {
    getById: function(req, res, next) {
        console.log(req.body);
        resistencia.findById(req.params.id, function(err, result){
            if (err) {
                next(err);
            } else {
                res.json({status:"success", message: "resistencia found!!!", data:{ result }});
            }
        });
    },
    getAll: function(req, res, next) {
        resistencia.find({}, function(err, result){
            if (err){
                next(err);
            } else {
                res.json({status:"success", message: "resistencia list found!!!", result });
                // res.json(data);
           }
        });
    },
    updateById: function(req, res, next) {
        resistencia.findByIdAndUpdate(req.params.id, req.body.name, function(err, result){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "resistencia updated successfully!!!", data:null});
            }
        });
    },
    deleteById: function(req, res, next) {
        resistencia.findByIdAndRemove(req.params.id, function(err, result){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "resistencia deleted successfully!!!", data:null});
            }
        });
    },
    create: function(req, res, next) {
        resistencia.create( req.body, function (err, result) {
            if (err) 
                next(err);
            else
                res.json({status: "success", message: "resistencia added successfully!!!", data: null});      
        });
    },
}