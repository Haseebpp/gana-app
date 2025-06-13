// — Configurations —
require('dotenv').config()
require('./config/db')

// — Start Express —
const express = require('express')
const app = express()

// — Express Middleware —   
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// — Health Check / Public Routes —
app.get('/', (req, res) => {
  res.send('API is live...')
});

module.exports = app
