const Joi = require('joi')


module.exports = {
    createValidation: request => {
        const createSchema = {
            Name: Joi.string().min(2).max(500).required(),
            Owner: Joi.string().min(2).max(500).required(),
            Type: Joi.string().min(3).max(500).required(),
            Location: Joi.string().min(3).max(100).required(),
            startDate: Joi.date().required(),
            endDate: Joi.date(),
            
        }
        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            Name: Joi.string().min(2).max(500),
            Owner: Joi.string().min(2).max(500),
            Type: Joi.string().min(3).max(500),
            Location: Joi.string().min(3).max(100),
            Participants: Joi.number().min(0),
            startDate: Joi.date(),
            endDate: Joi.date()
            
        }
        return Joi.validate(request, updateSchema)
    }, 

}