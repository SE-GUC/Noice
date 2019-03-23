const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            vacancyname: Joi.string().min(1).max(5000).required(),
            description: Joi.string().min(1).max(3000).required(),
            location: Joi.string().min(1).max(5000).required(),
            email: Joi.string().min(1).max(5000).required(),
            phonenumber: Joi.string().min(1).max(5000).required(),
            totalmeter: Joi.number().min(1).max(5000).required(),
            price: Joi.number().min(0).max(5000).required(),
            ownername: Joi.string().min(0).max(5000).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            vacancyname: Joi.string().min(1).max(5000),
            description: Joi.string().min(1).max(3000),
            location: Joi.string().min(1).max(5000),
            email: Joi.string().min(1).max(5000),
            phonenumber: Joi.string().min(1).max(5000),
            totalmeter: Joi.number().min(1).max(5000),
            price: Joi.number().min(0).max(5000),
            ownername: Joi.string().min(0).max(5000)
        }

        return Joi.validate(request, updateSchema)
    }, 
}
