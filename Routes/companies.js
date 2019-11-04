const express = require('express');
const app = express();
const auth = require('../Middlewares/auth');
const CompanyController = require('../Controllers/CompanyController');

app.use(auth);

app.get('/', CompanyController.index);
app.post('/', CompanyController.create);
app.put('/:id', CompanyController.update);
app.delete('/:id', CompanyController.delete);

module.exports = app;