const express = require('express');
const app = express();
const auth = require('../Middlewares/auth');
const ContractController = require('../Controllers/ContractController');

app.use(auth);

app.get('/', ContractController.index);
app.post('/create', ContractController.create);
app.put('/update/:id', ContractController.update);
app.delete('/delete/:id', ContractController.delete);

module.exports = app;