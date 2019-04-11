const BaseJoi = require('joi')
const dateExt = require('joi-date-extensions')
const Joi = BaseJoi.extend(dateExt)

module.exports = {
    createValidation: request => {
        const createSchema = {
            capacity:Joi.number().required().min(0).max(50),
            isAvailable:Joi.bool().optional(),
            locationId: Joi.string().required(),
            reservations: Joi.array().optional().items(Joi.object().keys(
                {
                    type: Joi.string().required().only('UNRESERVED','RESERVED','UNKOWN'),
                    startDate: Joi.date().required().format('DD-MM-YYYY hh:mm'),
                    endDate: Joi.date().required().format('DD-MM-YYYY hh:mm'),
                    reserverId: Joi.string().required()
                }
            ))
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const createSchema = {
            capacity:Joi.number().required().min(0).max(50),
            isAvailable:Joi.bool().optional(),
            locationId: Joi.string().required(),
            reservations: Joi.array().optional().items(Joi.object().keys(
                {
                    type: Joi.string().required().only('UNRESERVED','RESERVED','UNKNOWN'),
                    startDate: Joi.date().required().format('DD-MM-YYYY hh:mm'),
                    endDate: Joi.date().required().format('DD-MM-YYYY hh:mm'),
                    reserverId: Joi.string().required()
                }
            ))
        }

        return Joi.validate(request, createSchema)
    }, 
}