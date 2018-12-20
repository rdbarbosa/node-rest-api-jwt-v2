const Avaliacao = require('../models/avaliacao');

module.exports = {
    getById: function(req, res, next) {
        console.log(req.body);
        Avaliacao.findById(req.params.id, function(err, result){
            if (err) {
                next(err);
            } else {
                res.json({status:"success", message: "Avaliação found!!!", data:{avaliacoes: result}});
            }
        }).populate('pessoa');
    },
    getAll: function(req, res, next) {
        let List = [];
        Avaliacao.find({}, function(err, avaliacoes){
           res.json({status:"success", message: "Avaliação list found!!!", data: { avaliacoes }});
        });
    },
    updateById: function(req, res, next) {
        Avaliacao.findByIdAndUpdate(req.params.id, req.body, function(err, result){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "Avaliação updated successfully!!!", data:null});
            }
        });
    },
    deleteById: function(req, res, next) {
        Avaliacao.findByIdAndRemove(req.params.id, function(err, result){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "Avaliação deleted successfully!!!", data:null});
            }
        });
    },
    create: function(req, res, next) {
        Avaliacao.create( req.body , function (err, result) {
            if (err) 
                next(err);
            else
                res.json({status: "success", message: "Avaliação added successfully!!!", data: null});      
        });
    },
}