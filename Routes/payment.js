const express = require('express');
const app = express();
const auth = require('../Middlewares/auth');
const PaymentController = require('../Controllers/PaymentController');

app.use(auth);

app.group("/payments", (router) => {
    router.get('/', PaymentController.index);
    router.post('/create', PaymentController.create);
    router.put('/update/:id', PaymentController.update);
    router.delete('/delete/:id', PaymentController.delete);
});

module.exports = app;