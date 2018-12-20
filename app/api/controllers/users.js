const userModel = require('../models/users');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');

module.exports = {

    create: function(req, res, next) {
        userModel.create({ name: req.body.name, email: req.body.email, password: req.body.password }, function (err, result) {
            if (err) 
                next(err);
            else
                res.json({status: "success", message: "User added successfully!!!", data: null});
        });
    },
    authenticate: function(req, res, next) {
        userModel.findOne({ email:req.body.email }, function(err, userInfo){
            if (err) {
                next(err);
            } else {
                if(bcrypt.compareSync(req.body.password, userInfo.password)) {
                    const payload = {id: userInfo._id, name: userInfo.name, email: userInfo.email, avatar: userInfo.avatar }
                    const token = jwt.sign(payload, req.app.get('secretKey'), { expiresIn: '1h' });
                    res.json({status:"success", message: "user found!!!", data:{ user: userInfo }, token: token });
                }else{
                    res.json({status:"error", message: "Invalid email/password!!!", err});
                }
            }
        });
    },
}