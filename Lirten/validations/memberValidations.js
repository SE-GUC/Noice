const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(1).max(5000).required(),
            age: Joi.number().min(1).max(5000).required(),
            gender:Joi.string().min(1).max(5000).required(),
            address:Joi.string().min(1).max(5000).required(),
            email: Joi.string().min(1).max(5000).required(),
            phonenumber: Joi.string().min(1).max(5000).required(),
            skills: Joi.array().min(0).max(5000),
            interests: Joi.array().min(0).max(5000),
            past_events: Joi.array().min(0).max(5000),
            projects: Joi.array().min(0).max(5000),
            reviews_received:Joi.array().min(0).max(5000),
            certificaes_held :Joi.array().min(0).max(5000),
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(1).max(5000),
            age: Joi.number().min(1).max(5000),
            gender:Joi.string().min(1).max(5000),
            address:Joi.string().min(1).max(5000),
            email: Joi.string().min(1).max(5000),
            phonenumber: Joi.string().min(1).max(5000),
            skills: Joi.array().min(0).max(5000),
            interests: Joi.array().min(0).max(5000),
            past_events: Joi.array().min(0).max(5000),
            projects: Joi.array().min(0).max(5000),
            reviews_received:Joi.array().min(0).max(5000),
            certificaes_held :Joi.array().min(0).max(5000),
        }

        return Joi.validate(request, updateSchema)
    }, 
}