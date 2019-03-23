
const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            Date: Joi.string().required(),
            timings: Joi.string().min(1).required(),
            Location: Joi.string().min(1).required(),
            status: Joi.number().required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
        Date: Joi.string().required(),
        timings: Joi.string().min(1).required(),
        Location: Joi.string().min(1).required(),
        status: Joi.number().required(),
        }

        return Joi.validate(request, updateSchema)
    }, 
}