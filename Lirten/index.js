const express = require('express')


const location = require('./routes/api/Location')
const calender = require('./routes/api/calender')



const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Lirten Hub</h1>
    `);
})

// Direct routes to appropriate files 

app.use('/api/Location', location)
app.use('/api/calender', calender)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
