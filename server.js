const PORT = process.env.PORT || 5000;
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('./app/config/database'); //database configuration
const jwt = require('jsonwebtoken');
const app = express();

app.set('secretKey', 'nodeRestApi'); // jwt secret token

const movies = require('./app/routes/movies');
const users = require('./app/routes/users');
const aval = require('./app/routes/avaliacao');
const pessoa = require('./app/routes/pessoa');
const agilidade = require('./app/routes/agilidade');
const corrida = require('./app/routes/corrida');
const flexibilidade = require('./app/routes/flexibilidade');
const forca = require('./app/routes/forcaMembrosSup');
const imc = require('./app/routes/imc');
const resistencia = require('./app/routes/resistencia');
const resistenciaAbs = require('./app/routes/resistenciaAbs');
const salto = require('./app/routes/salto');
const velocidade = require('./app/routes/velocidade');


// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.json({"tutorial" : "Build REST API with node.js"});
});

// public route
app.use('/api/users', users);
// private route
app.use('/api/movies', validateUser, movies);
app.use('/api/aval', aval);
app.use('/api/pessoa', pessoa);
app.use('/api/agilidade', agilidade);
app.use('/api/corrida', corrida);
app.use('/api/flexibilidade', flexibilidade);
app.use('/api/forca', forca);
app.use('/api/imc', imc);
app.use('/api/resistencia', resistencia);
app.use('/api/abs', resistenciaAbs);
app.use('/api/salto', salto);
app.use('/api/velocidade', velocidade);


app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});

function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
        if (err) {
            res.json({status:"error", message: err.message, data:null});
        }else{
        // add user id to request
        req.body.userId = decoded.id;
        next();
        }
    });
}

// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// handle errors
app.use(function(err, req, res, next) {
    console.log(err);
    if(err.status === 404)
        res.status(404).json({message: "Not found"});
    else 
        res.status(500).json({message: "Something looks wrong :( !!!"});
});

app.listen(PORT, () => { 
    console.log(`Node server listening on port ${PORT}`);
});