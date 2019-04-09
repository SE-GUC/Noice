const BaseJoi = require('joi')
const dateExt = require('joi-date-extensions')
const Joi = BaseJoi.extend(dateExt)

module.exports = {
    createValidation: request => {
        const createSchema = {
            state: Joi.string().required().only('UNRESERVED','RESERVED','UNKOWN'),
            startDate: Joi.date().required().format('DD-MM-YYYY hh:mm'),
            endDate: Joi.date().required().format('DD-MM-YYYY hh:mm'),
            reserverId: Joi.string().required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const createSchema = {
            state: Joi.string().required().only('UNRESERVED','RESERVED','UNKOWN'),
            startDate: Joi.date().required().format('DD-MM-YYYY hh:mm'),
            endDate: Joi.date().required().format('DD-MM-YYYY hh:mm'),
            reserverId: Joi.string().required()
        }
        return Joi.validate(request, createSchema)
    }, 
}