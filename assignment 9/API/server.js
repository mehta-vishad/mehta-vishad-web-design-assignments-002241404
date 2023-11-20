require('dotenv').config()
// In server.js or as a middleware


const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.on('open', () => console.log('connected to database'))

app.use(express.json())

const usersRouter = require('./routes/userss')
app.use('/users', usersRouter)

app.listen(3001, () => console.log("server started"));

