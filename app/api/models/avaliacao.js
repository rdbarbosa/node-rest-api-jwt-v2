const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AvaliacaoSchema = new Schema({
    nome: { type: String, required: true },
    pessoa: { type: Schema.Types.ObjectId, ref: 'pessoa' },
    massaCorporal: { type: Number, required: false },
    estatura: { type: Number, required: false },
    envergadura: { type: Number, required: false },
    cintura: { type: Number, required: false },
    imc: { type: Number, required: false },
    caminhada: { type: Number, required: false },
    flexibilidade: { type: Number, required: false },
    abdominais: { type: Number, required: false },
    arremesso: { type: Number, required: false },
    salto: { type: Number, required: false },
    agilidade: { type: Number, required: false },
    velocidade: { type: Number, required: false },
    resistencia: { type: Number, required: false },
    dataAvaliacao: { type: Date, required: false },
    dateCad: { type: Date, default: Date.now },
    dateAt: { type: Date, default: Date.now }
});

const Avaliacao = mongoose.model('avaliacao', AvaliacaoSchema);

module.exports = Avaliacao;