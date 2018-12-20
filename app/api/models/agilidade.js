const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AgilidadeSchema = new Schema({
    idade: { type: Number, required: true },
    sexo: { type: String, required: true },
    fraco: { type: Number, required: false },
    razoavel: { type: Number, required: false },
    bom: { type: Number, required: false },
    muitoBom: { type: Number, required: false },
    execelencia: { type: Number, required: false },
    dateCad: { type: Date, default: Date.now },
    dateAt: { type: Date, default: Date.now }
});

const Agilidade = mongoose.model('agilidade', AgilidadeSchema);

module.exports = Agilidade;