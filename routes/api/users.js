const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
var User = require('../../models/Users')

router.get('/', async (req, res) => {
    const users = await User.find()
    res.json({data: users})
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const users = await User.findByIdAndDelete(id)
    res.json({msg:'user deleted' ,data: users})
})

module.exports = router