const express = require('express')
const mongoose = require('mongoose')

// Require Router Handlers
const location = require('./routes/api/Location')
const calender = require('./routes/api/calender')
const members=require('./routes/api/member')
const partners = require('./routes/api/partners')

const admins = require ('./routes/api/admins')
const location = require('./routes/api/Location')
const calender = require('./routes/api/calender')
const members=require('./routes/api/member')
const partners = require('./routes/api/partners')
const requests = require('./routes/api/requests.js')
const vacancies = require('./routes/api/vacancies')
const notifications = require('./routes/api/notifications')

const app = express()
// DB Config
const db = require('./config/keys').mongoURI
// Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))


app.use(express.json())
app.use(express.urlencoded({extended: false}))




// DB Config
const db = require('./config/keys').mongoURI

// Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Lirten Hub</h1>
    <a href="/api/admins">Admins</a>
    `);
})


app.use('/api/admins',admins)

app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server on ${port}`))
