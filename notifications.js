const express = require('express')
const Joi = require('joi')
const uuid = require('uuid')
const router = express.Router()

const Notification = require('../../models/Notification')

const notifications = [
    new Notification('7amada', 'abo hmed', '1/2/2019', 'user', 'Hi, this is for your job'),
    new Notification('bob', 'stookey', '3/4/2019', 'user', 'Hi, this is for your vacancy')
]

/******* get all notifications *****/
router.get('/', (req, res) => res.json({data:notifications}));

/******* get notification by id ****/
router.get('/:id', (req, res) => {
    const notificationID = req.params.id
    const notification = notifications.find(notification => notification.id === notificationID)
    return res.json({ data: notification });
})

/******* post a notification *******/
router.post('/', (req,res) =>
{
    const from = req.body.from
    const to = req.body.to
    const time = req.body.time
    const type = req.body.type
    const description = req.body.description
    const schema = 
    {
        from: Joi.string().min(3).required(),
        to: Joi.string().min(3).required(), 
        time: Joi.date().required(),
        type: Joi.string().min(2).required(),
        description: Joi.string() // can be changed later to a reference?
    }
    const result = Joi.validate(req.body,schema);
    if(result.error) return res.status(400).send({error: result.error.details[0].message})
    const newNotification = 
    {
        from,
        to,
        time,
        type,
        description,
        id : uuid.v4()
    }
    notifications.push(newNotification)
    return res.json({data : newNotification});
});


/******* delete a notification ******/
router.delete('/:id', (req, res) => {
    const notificationID = req.params.id 
    const nnotification = notifications.find(nnotification => nnotification.id === notificationID)
    const index = notifications.indexOf(nnotification)
    notifications.splice(index,1)
    res.send(notifications)
})

/******* update a notification ******/
router.put('/:id', (req, res) => {
    const notificationID = req.params.id

    const updatedFrom = req.body.from
    const updatedTo = req.body.to
    const updatedTime = req.body.time
    const updatedType = req.body.type
    const updatedDescription = req.body.description

    const notification = notifications.find(notification => notification.id === notificationID)

    if(updatedFrom) notification.from=updatedFrom;
    if(updatedTo) notification.to=updatedTo;
    if(updatedTime) notification.time=updatedTime;
    if(updatedType) notification.type=updatedType;
    if(updatedDescription) notification.description=updatedDescription;
    
    return res.json({ data: notification });
});


module.exports = router;