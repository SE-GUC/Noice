const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
var User = require('../../models/Users')

router.get('/', async (req, res) => {
    const users = await User.find()
    res.json({data: users})
})

module.exports = router