const express = require('express');
const app = express();
const auth = require('../Middlewares/auth');
const ContractController = require('../Controllers/ContractController');

app.use(auth);

app.get('/', ContractController.index);
app.post('/', ContractController.create);
app.put('/:id', ContractController.update);
app.delete('/:id', ContractController.delete);

module.exports = app;