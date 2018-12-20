const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PessoaSchema = new Schema({
    nome: { type: String, required: true },
    sexo: { type: String, required: true },
    dataNascimento: { type: Date, required: false },
    nomeMae: { type: String, required: false },
    email: { type: String, required: false },
    telefone: { type: String, required: false },
    avaliacaoes: { type: Schema.Types.ObjectId, ref: 'avaliacao' },
    dateCad: { type: Date, default: Date.now },
    dateAt: { type: Date, default: Date.now }
});

const Pessoa = mongoose.model('pessoa', PessoaSchema);

module.exports = Pessoa;

