//Importing dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

//Importing Routes
const statsRoute = require('./routes/stats');
const utilsRoute = require('./routes/utils');

//Middlewares
app.use(bodyParser.json());
app.use('/collection/stats', statsRoute);
app.use('/utils/contact_me', utilsRoute);

//Database Connection
mongoose.connect(process.env.DB_CONNECTION_STRING, 
                { useNewUrlParser: true, useUnifiedTopology: true },
                () =>
    console.log('Successfully connected to Database!')
).catch(err => {
    res.send(err);
});

//Choosing port
app.listen(4000);