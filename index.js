const express = require('express')

const mongoose = require('mongoose');


const location = require('./routes/api/users/location')
const calender = require('./routes/api/calender')
const members=require('./routes/api/users/members')
const users=require('./routes/api/users')
const partners = require('./routes/api/users/partners')
const admins = require ('./routes/api/admins')
const requests = require('./routes/api/requests')
const notifications = require('./routes/api/notifications')
const vacancy = require('./routes/api/vacancy')
const message = require('./routes/api/message')

const app = express()

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

app.use('/api/users',users)
app.use('/api/users/member',members)
app.use('/api/users/location', location)
app.use('/api/calender', calender)
app.use('/api/users/partners', partners)
app.use('/api/admins',admins)
app.use('/api/requests',requests)
app.use('/api/notifications', notifications)
app.use('/api/vacancy', vacancy)
app.use('/api/message', message)


// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))