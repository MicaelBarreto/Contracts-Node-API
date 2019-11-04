const express = require('express');
const app = express();
const auth = require('../Middlewares/auth');
const PaymentController = require('../Controllers/PaymentController');

app.use(auth);

app.get('/', PaymentController.index);
app.post('/', PaymentController.create);
app.put('/:id', PaymentController.update);
app.delete('/:id', PaymentController.delete);

module.exports = app;