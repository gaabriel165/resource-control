const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/crud-elven', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Mongodb conectado!');
}).catch((err) => {
    console.log(err)
});

const usuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    tipo: {
        type: String,
        require: true
    },
    data: {
        type: String,
        require: true
    }
});

const Banco = mongoose.model("usuarios", usuarioSchema);

module.exports = Banco;