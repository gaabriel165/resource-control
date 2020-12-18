const express = require('express');
const app = express();
const Banco = require('./bd.js');

const port = 3030;

//Config body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(async function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    await next();
});

app.get('/listagem', (req, res) => {
    Banco.find().then((doc) => {
        res.send(doc);
    }).catch((err) => {
        console.log(err)
    })
});

app.post('/cadastro', (req, res) => {
    new Banco({
        nome: req.body.nome,
        tipo: req.body.tipo,
        data: '14/11/2020'
    }).save().then(() => {
        res.status(200).send('OK');
    });
});

app.put('/editar/:id', (req, res) => {
    Banco.findOneAndUpdate({ _id: req.params.id }, { nome: req.body.nome, tipo: req.body.tipo, data: '15/11/2020'}).then(() => {
        res.status(200).send('OK');
    })
})

app.delete('/deletar/:id', (req, res) => {
    Banco.findOneAndDelete({ _id: req.params.id }).exec().then(() => {
        res.status(200).send('OK');
    });
});

app.listen(port, () => {
    console.log('Servidor rodando');
});