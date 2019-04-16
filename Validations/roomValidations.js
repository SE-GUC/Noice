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
                    state: Joi.string().required().only('REQUESTED','RESERVED','REJECTED'),
                    startDate: Joi.date().required().format('DD-MM-YYYY hh:mm'),
                    endDate: Joi.date().required().format('DD-MM-YYYY hh:mm'),
                    reserverId: Joi.string().required(),
                    _id:Joi.string().optional()
                }
            )),
            tags: Joi.array(),
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
                    state: Joi.string().required().only('REQUESTED','RESERVED','REJECTED'),
                    startDate: Joi.date().required().format('DD-MM-YYYY hh:mm'),
                    endDate: Joi.date().required().format('DD-MM-YYYY hh:mm'),
                    reserverId: Joi.string().required(),
                    _id:Joi.string().optional()
                }
            )),
            tags: Joi.array(),
        }

        return Joi.validate(request, createSchema)
    }, 
}