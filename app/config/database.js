//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://dev:cpd*1234@ds031257.mlab.com:31257/dbhovi';

mongoose.connect(mongoDB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);
mongoose.Promise = global.Promise;

module.exports = mongoose;