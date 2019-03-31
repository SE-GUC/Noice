const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            From: Joi.string().min(1).required(),
            To: Joi.string().min(1).required(),
            Time: Joi.date().required(),
            Type: Joi.string().required(),
            Title: Joi.string().min(1).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            From: Joi.string().min(1).required(),
            To: Joi.string().min(1).required(),
            Time: Joi.date().required(),
            Type: Joi.string().required(),
            Title: Joi.string().min(1).required()
        }

        return Joi.validate(request, updateSchema)
    }, 
}