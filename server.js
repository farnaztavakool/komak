import routes from './route.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'

import contactSchema from './models/crmModels';
const express = require('express')
const app = express()

// const path = require('path')

const port = 8080

// connecting to the URL 

// schema defines the role for what the database should accept
const database = "mongodb://localhost/new"

mongoose.Promise = global.Promise;
mongoose.connect(database, {
    useNewUrlParser : true,
    useUnifiedTopology: true
}) 
    .catch(error => console.log(error))
    .then(() => console.log("connected to mongodb "))
// mongoose?
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app)

// serving static files

app.use(express.static('public'))

app.get('/',(req, res) => {

    res.send('hello')
})

app.listen(port, () => {
    console.log(`listening on port${port}`)
})
