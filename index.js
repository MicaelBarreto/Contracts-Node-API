const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./Config/settings');
//require('./seeds/seed'); // Uncomment to seed

const url = config.db;

const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true };

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) => {
    console.log('Connection error with DB: '+err);
});

mongoose.connection.on('disconnected', () => {
    console.log('DB Disconnected');
});

mongoose.connection.on('connected', () => {
    console.log('Connected to DB');
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRoute = require('./Routes/index');
const usersRoute = require('./Routes/users');
const companiesRoute = require('./Routes/companies');
const contractsRoute = require('./Routes/contracts');
const paymentsRoute = require('./Routes/payments');

app.use('/', indexRoute);
app.use('/users', usersRoute);
app.use('/companies', companiesRoute);
app.use('/contracts', contractsRoute);
app.use('/payments', paymentsRoute);

app.listen(3000);

module.exports = app;