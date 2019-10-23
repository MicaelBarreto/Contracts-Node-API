const express = require('express');
const app = express();
const auth = require('../Middlewares/auth');
const CompanyController = require('../Controllers/CompanyController');

app.use(auth);

app.get('/', CompanyController.index);
app.post('/create', CompanyController.create);
app.put('/update/:id', CompanyController.update);
app.delete('/delete/:id', CompanyController.delete);

module.exports = app;