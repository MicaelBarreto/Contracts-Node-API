const express = require('express');
const app = express();
const auth = require('../Middlewares/auth');
const PaymentController = require('../Controllers/PaymentController');

app.use(auth);

app.get('/', PaymentController.index);
app.post('/create', PaymentController.create);
app.put('/update/:id', PaymentController.update);
app.delete('/delete/:id', PaymentController.delete);

module.exports = app;