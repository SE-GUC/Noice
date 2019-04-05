const Joi = require('joi')


module.exports = {
    createValidation: request => {
        const createSchema = {
            Type: Joi.string().min(3).max(500).required(),
            Location: Joi.string().min(3).max(100).required(),
            Participants: Joi.number().min(0).required(),
            Date: Joi.array().items(Joi.object().keys(
                {
                    startDate: Joi.date().required(),
                    endDate: Joi.date().required()
                }
            )),
        }
        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            Type: Joi.string().min(3).max(500),
            Location: Joi.string().min(3).max(100),
            Participants: Joi.number().min(0),
            Date: Joi.array().items(Joi.object().keys(
                {
                    startDate: Joi.date(),
                    endDate: Joi.date()
                }
            )),
        }
        return Joi.validate(request, updateSchema)
    }, 

}