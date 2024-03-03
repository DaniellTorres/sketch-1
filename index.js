const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let dataStore = []; 

app.post('/upload', (req, res) => {
    dataStore = []
    dataStore.push(req.body);
    res.send('Dados JSON recebidos com sucesso.');
});

app.get('/data', (req, res) => {
    res.json(dataStore);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
