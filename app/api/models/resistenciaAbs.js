const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResAbsSchema = new Schema({
    idade: { type: Number, required: true },
    sexo: { type: String, required: true },
    valor: { type: Number, required: false },
    dateCad: { type: Date, default: Date.now },
    dateAt: { type: Date, default: Date.now }
});

const ResAbs = mongoose.model('resAbs', ResAbsSchema);

module.exports = ResAbs;