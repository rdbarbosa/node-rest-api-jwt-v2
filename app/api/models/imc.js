const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImcSchema = new Schema({
    idade: { type: Number, required: true },
    sexo: { type: String, required: true },
    valor: { type: Number, required: false },
    dateCad: { type: Date, default: Date.now },
    dateAt: { type: Date, default: Date.now }
});

const Imc = mongoose.model('imc', ImcSchema);

module.exports = Imc;