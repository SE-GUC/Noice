    
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');

const events = require('./routes/api/events')
const location = require('./routes/api/location')
const calender = require('./routes/api/calender')
const members=require('./routes/api/members')
const partners = require('./routes/api/partners')
const admins = require ('./routes/api/admins')
const requests = require('./routes/api/requests')
const notifications = require('./routes/api/notifications')
const vacancy = require('./routes/api/vacancy')
const message = require('./routes/api/message')

const app = express()
const bodyParser = require('body-parser');

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
app.use(cors())
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Lirten Hub</h1>
    <a href="/api/admins">Admins</a>
    <a href="/api/members">member</a>
    <a href="/api/location">location</a>
    <a href="/api/calender">calender</a>
    <a href="/api/partners">partners</a>
    <a href="/api/requests">requests</a>
    <a href="/api/notifications">notifications</a>
    <a href="/api/events">events</a>
    <a href="/api/vacancy">vacancy</a>
    <a href="/api/message">message</a>
`);
})

// Direct routes to appropriate files 

app.use('/api/events',events)
app.use('/api/member',members)
app.use('/api/location', location)
app.use('/api/calender', calender)
app.use('/api/partners', partners)
app.use('/api/admins',admins)
app.use('/api/requests',requests)
app.use('/api/notifications', notifications)
app.use('/api/vacancy', vacancy)
app.use('/api/message', message)
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server up and running on port ${port}`))