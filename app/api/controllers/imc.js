const imc = require('../models/imc');

module.exports = {
    getById: function(req, res, next) {
        console.log(req.body);
        imc.findById(req.params.id, function(err, result){
            if (err) {
                next(err);
            } else {
                res.json({status:"success", message: "imc found!!!", data:{ result }});
            }
        });
    },
    getBySex: function(req, res, next) {
        imc.find({ sexo: req.params.sexo }, function(err, result){
            if (err){
                next(err);
            } else {
                res.json({status:"success", message: `imc list filtrado por sexo!!! ${req.params.sexo}`, result });
           }
        });
    },
    getAll: function(req, res, next) {
        imc.find({}, function(err, result){
            if (err){
                next(err);
            } else {
                res.json({status:"success", message: "imc list found!!!", result });
                // res.json(data);
           }
        });
    },
    updateById: function(req, res, next) {
        imc.findByIdAndUpdate(req.params.id, req.body.name, function(err, result){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "imc updated successfully!!!", data:null});
            }
        });
    },
    deleteById: function(req, res, next) {
        imc.findByIdAndRemove(req.params.id, function(err, result){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "imc deleted successfully!!!", data:null});
            }
        });
    },
    create: function(req, res, next) {
        imc.create( req.body, function (err, result) {
            if (err) 
                next(err);
            else
                res.json({status: "success", message: "imc added successfully!!!", data: null});      
        });
    },
}