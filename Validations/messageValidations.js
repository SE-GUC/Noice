const Joi = require('joi')

module.exports = {
    createValidation: message => {
        const createSchema = {
            senderID: Joi.string().min(3).max(50).required(),
            receiverID: Joi.string().min(3).max(50).required(),
            subject: Joi.string().min(3).max(50).required(),
            content: Joi.string().min(0).max(3000).required(),
            date: Joi.string().max(11).required(),
            
        }

        return Joi.validate(message, createSchema)
    },

    updateValidation: message => {
        const updateSchema = {
            senderID: Joi.string().min(3).max(50),
            receiverID: Joi.string().min(3).max(50),
            subject: Joi.string().min(3).max(50),
            content: Joi.string().min(0).max(3000),
            date: Joi.string().max(10),
            
        }

        return Joi.validate(message, updateSchema)
    }, 
}
