const flexibilidade = require('../models/flexibilidade');

module.exports = {
    getById: function(req, res, next) {
        console.log(req.body);
        flexibilidade.findById(req.params.id, function(err, result){
            if (err) {
                next(err);
            } else {
                res.json({status:"success", message: "flexibilidade found!!!", data:{ result }});
            }
        });
    },
    getAll: function(req, res, next) {
        flexibilidade.find({}, function(err, result){
            if (err){
                next(err);
            } else {
                res.json({status:"success", message: "flexibilidade list found!!!", result });
                // res.json(data);
           }
        });
    },
    updateById: function(req, res, next) {
        flexibilidade.findByIdAndUpdate(req.params.id, req.body.name, function(err, result){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "flexibilidade updated successfully!!!", data:null});
            }
        });
    },
    deleteById: function(req, res, next) {
        flexibilidade.findByIdAndRemove(req.params.id, function(err, result){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "flexibilidade deleted successfully!!!", data:null});
            }
        });
    },
    create: function(req, res, next) {
        flexibilidade.create( req.body, function (err, result) {
            if (err) 
                next(err);
            else
                res.json({status: "success", message: "flexibilidade added successfully!!!", data: null});      
        });
    },
}