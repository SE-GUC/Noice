const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            firstName: Joi.string().min(2).required(),
            middleName: Joi.string().min(1).required(),
            lastName: Joi.string().min(1).required(),
            age: Joi.number().required(),
            
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            firstName: Joi.string().min(2),
            middleName: Joi.string().min(1),
            lastName: Joi.string().min(1),
            age: Joi.number()
        }

        return Joi.validate(request, updateSchema)
    }, 
   
}