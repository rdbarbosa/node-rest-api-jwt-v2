const velocidade = require('../models/velocidade');

module.exports = {
    getById: function(req, res, next) {
        console.log(req.body);
        velocidade.findById(req.params.id, function(err, result){
            if (err) {
                next(err);
            } else {
                res.json({status:"success", message: "velocidade found!!!", data:{ result }});
            }
        });
    },
    getAll: function(req, res, next) {
        velocidade.find({}, function(err, result){
            if (err){
                next(err);
            } else {
                res.json({status:"success", message: "velocidade list found!!!", result });
                // res.json(data);
           }
        });
    },
    updateById: function(req, res, next) {
        velocidade.findByIdAndUpdate(req.params.id, req.body.name, function(err, result){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "velocidade updated successfully!!!", data:null});
            }
        });
    },
    deleteById: function(req, res, next) {
        velocidade.findByIdAndRemove(req.params.id, function(err, result){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "velocidade deleted successfully!!!", data:null});
            }
        });
    },
    create: function(req, res, next) {
        velocidade.create( req.body, function (err, result) {
            if (err) 
                next(err);
            else
                res.json({status: "success", message: "velocidade added successfully!!!", data: null});      
        });
    },
}