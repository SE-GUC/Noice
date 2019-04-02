
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
        Date: Joi.string(),
        timings: Joi.string().min(1),
        Location: Joi.string().min(1),
        status: Joi.number(),
        }

        return Joi.validate(request, updateSchema)
    }, 
}