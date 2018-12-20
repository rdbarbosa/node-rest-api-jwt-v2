const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlexibilidadecSchema = new Schema({
    idade: { type: Number, required: true },
    sexo: { type: String, required: true },
    valor: { type: Number, required: false },
    dateCad: { type: Date, default: Date.now },
    dateAt: { type: Date, default: Date.now }
});

const Flexibilidade = mongoose.model('flexibilidade', FlexibilidadecSchema);

module.exports = Flexibilidade;