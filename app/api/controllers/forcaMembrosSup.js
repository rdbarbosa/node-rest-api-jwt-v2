const forca = require('../models/forcaMembrosSup');

module.exports = {
    getById: function(req, res, next) {
        console.log(req.body);
        forca.findById(req.params.id, function(err, result){
            if (err) {
                next(err);
            } else {
                res.json({status:"success", message: "forca found!!!", data:{ result }});
            }
        });
    },
    getAll: function(req, res, next) {
        forca.find({}, function(err, result){
            if (err){
                next(err);
            } else {
                res.json({status:"success", message: "forca list found!!!", result });
                // res.json(data);
           }
        });
    },
    updateById: function(req, res, next) {
        forca.findByIdAndUpdate(req.params.id, req.body.name, function(err, result){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "forca updated successfully!!!", data:null});
            }
        });
    },
    deleteById: function(req, res, next) {
        forca.findByIdAndRemove(req.params.id, function(err, result){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "forca deleted successfully!!!", data:null});
            }
        });
    },
    create: function(req, res, next) {
        forca.create( req.body, function (err, result) {
            if (err) 
                next(err);
            else
                res.json({status: "success", message: "forca added successfully!!!", data: null});      
        });
    },
}