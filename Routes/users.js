const express = require('express');
const app = express();
const auth = require('../Middlewares/auth');
const UserController = require('../Controllers/UserController');

app.use(auth);

app.group("/users", (router) => {
    router.get('/', UserController.index);
    router.post('/create', UserController.create);
    router.put('/update/:id', UserController.update);
    router.delete('/delete/:id', UserController.delete);
    router.post('/auth', UserController.auth);
});

module.exports = app;