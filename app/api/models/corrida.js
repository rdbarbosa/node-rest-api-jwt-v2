const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CorridaSchema = new Schema({
    idade: { type: Number, required: true },
    sexo: { type: String, required: true },
    valor: { type: Number, required: false },
    dateCad: { type: Date, default: Date.now },
    dateAt: { type: Date, default: Date.now }
});

const Corrida = mongoose.model('corrida', CorridaSchema);

module.exports = Corrida;