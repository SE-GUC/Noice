const BaseJoi = require('joi')
const dateExt = require('joi-date-extensions')
const Joi = BaseJoi.extend(dateExt)

module.exports = {
    createValidation: request => {
        const createSchema = {
            state: Joi.string().required().only('REQUESTED','RESERVED','REJECTED'),
            startDate: Joi.date().required().format('DD-MM-YYYY hh:mm'),
            endDate: Joi.date().required().format('DD-MM-YYYY hh:mm'),
            reserverId: Joi.string().required(),
            _id:Joi.string().optional()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const createSchema = {
            state: Joi.string().required().only('REQUESTED','RESERVED','REJECTED'),
            startDate: Joi.date().required().format('DD-MM-YYYY hh:mm'),
            endDate: Joi.date().required().format('DD-MM-YYYY hh:mm'),
            reserverId: Joi.string().required(),
            _id:Joi.string().optional()
        }
        return Joi.validate(request, createSchema)
    }, 
}