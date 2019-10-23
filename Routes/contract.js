const express = require('express');
const app = express();
const auth = require('../Middlewares/auth');
const ContractController = require('../Controllers/ContractController');

app.use(auth);

app.group("/contracts", (router) => {
    router.get('/', ContractController.index);
    router.post('/create', ContractController.create);
    router.put('/update/:id', ContractController.update);
    router.delete('/delete/:id', ContractController.delete);
});

module.exports = app;