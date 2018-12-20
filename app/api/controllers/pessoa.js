const pessoa = require('../models/pessoa');

module.exports = {
    getById: function(req, res, next) {
        console.log(req.body);
        pessoa.findById(req.params.id, function(err, result){
            if (err) {
                next(err);
            } else {
                res.json({status:"success", message: "Pessoa found!!!", data:{ result }});
            }
        });
    },
    getAll: function(req, res, next) {
        pessoa.find({}, function(err, result){
            if (err){
                next(err);
            } else {
                res.json({status:"success", message: "Pessoa list found!!!", result });
                // res.json(data);
           }
        });
    },
    updateById: function(req, res, next) {
        pessoa.findByIdAndUpdate(req.params.id, req.body, function(err, result){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "Pessoa updated successfully!!!", data: result});
            }
        });
    },
    deleteById: function(req, res, next) {
        pessoa.findByIdAndRemove(req.params.id, function(err, result){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "Pessoa deleted successfully!!!", data: result});
            }
        });
    },
    create: function(req, res, next) {
        pessoa.create( req.body, function (err, result) {
            if (err) 
                next(err);
            else
                res.json({status: "success", message: "Pessoa added successfully!!!", data: result});      
        });
    },
}