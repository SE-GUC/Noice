const BaseJoi = require('joi')
const dateExt = require('joi-date-extensions')
const Joi = BaseJoi.extend(dateExt)

module.exports = {
    createValidation: message => {
        const createSchema = {
            senderID: Joi.string().min(3).max(50).required(),
            receiverID: Joi.string().min(3).max(50).required(),
            subject: Joi.string().min(3).max(50).required(),
            content: Joi.string().min(0).max(3000).required(),
            date: Joi.date().format('DD-MM-YYYY hh:mm').required(),
            
        }

        return Joi.validate(message, createSchema)
    },

    updateValidation: message => {
        const updateSchema = {
            senderID: Joi.string().min(3).max(50),
            receiverID: Joi.string().min(3).max(50),
            subject: Joi.string().min(3).max(50),
            content: Joi.string().min(0).max(3000),
            date: Joi.date().format('DD-MM-YYYY hh:mm').max(10),
            
        }

        return Joi.validate(message, updateSchema)
    }, 
}
