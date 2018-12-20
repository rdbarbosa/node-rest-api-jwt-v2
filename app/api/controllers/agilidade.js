const agilidade = require('../models/agilidade');

module.exports = {
    getById: function(req, res, next) {
        console.log(req.body);
        agilidade.findById(req.params.id, function(err, result){
            if (err) {
                next(err);
            } else {
                res.json({status:"success", message: "Agilidade found!!!", data:{ result }});
            }
        });
    },
    getAll: function(req, res, next) {
        agilidade.find({}, function(err, result){
            if (err){
                next(err);
            } else {
                res.json({status:"success", message: "Agilidade list found!!!", result });
                // res.json(data);
           }
        });
    },
    updateById: function(req, res, next) {
        agilidade.findByIdAndUpdate(req.params.id, req.body.name, function(err, result){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "Agilidade updated successfully!!!", data:null});
            }
        });
    },
    deleteById: function(req, res, next) {
        agilidade.findByIdAndRemove(req.params.id, function(err, result){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "Agilidade deleted successfully!!!", data:null});
            }
        });
    },
    create: function(req, res, next) {
        agilidade.create( req.body, function (err, result) {
            if (err) 
                next(err);
            else
                res.json({status: "success", message: "Agilidade added successfully!!!", data: null});      
        });
    },
}