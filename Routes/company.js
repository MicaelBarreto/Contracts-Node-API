const express = require('express');
const app = express();
const auth = require('../Middlewares/auth');
const CompanyController = require('../Controllers/CompanyController');

app.use(auth);

app.group("/companies", (router) => {
    router.get('/', CompanyController.index);
    router.post('/create', CompanyController.create);
    router.put('/update/:id', CompanyController.update);
    router.delete('/delete/:id', CompanyController.delete);
});

module.exports = app;