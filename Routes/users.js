const express = require('express');
const app = express();
const auth = require('../Middlewares/auth');
const UserController = require('../Controllers/UserController');

app.use(auth);

app.get('/', UserController.index);
app.post('/create', UserController.create);
app.put('/update/:id', UserController.update);
app.delete('/delete/:id', UserController.delete);

module.exports = app;