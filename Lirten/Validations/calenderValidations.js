
const BaseJoi = require('joi')
const dateExt = require('joi-date-extensions')
const Joi = BaseJoi.extend(dateExt)


module.exports = {
    createValidation: request => {
        const createSchema = {
            Date: Joi.date().format('DD-MM-YYYY hh:mm').required(),
            timings: Joi.string().min(1).required(),
            Location: Joi.string().min(1).required(),
            status: Joi.number().required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
        Date: Joi.date().format('DD-MM-YYYY hh:mm'),
        timings: Joi.string().min(1),
        Location: Joi.string().min(1),
        status: Joi.number(),
        }

        return Joi.validate(request, updateSchema)
    }, 
}