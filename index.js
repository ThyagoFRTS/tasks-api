const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.use('/',(req,res) => {
    res.send("App")
})

app.listen(3000, () => {
    console.log('App in 3000 port')
})