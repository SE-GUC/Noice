const express = require('express')

const users = require('./routes/api/users')


const app = express()
app.use(express.json())





const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
