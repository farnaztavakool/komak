// import routes from './routes/route.mjs';
const routes = require('./routes/route.mjs')
const express = require('express')
// import express from "express"
const app = express()

const path = require('path')

const port = 8080

routes(app)

app.get('/',(req, res) => {

    res.send('hello')
})

app.listen(port, () => {
    console.log(`listening on port${port}`)
})
