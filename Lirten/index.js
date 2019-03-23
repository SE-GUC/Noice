const express = require('express')

const mongoose = require('mongoose');


const location = require('./routes/api/Location')
const calender = require('./routes/api/calender')
const members=require('./routes/api/member')
const partners = require('./routes/api/partners')
const admins = require ('./routes/api/admins')
const requests = require('./routes/api/requests.js')
const vacancies = require('./routes/api/vacancies')
const notifications = require('./routes/api/notifications')
const vacancyads = require('./routes/api/vacancyads')

const app = express()

// DB Config
const db = require('./config/keys').mongoURI

// Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

app.use(express.json())
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

// Direct routes to appropriate files 

app.use('/api/member',members)
app.use('/api/Location', location)
app.use('/api/calender', calender)
app.use('/api/partners', partners)
app.use('/api/admins',admins)
app.use('/api/requests',requests)
app.use('/api/vacancies', vacancies)
app.use('/api/notifications', notifications)
app.use('/api/vacancyads', vacancyads)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
