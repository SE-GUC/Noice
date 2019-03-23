const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(1).max(5000).required(),
            age: Joi.number().min(1).max(3000).required(),
            field: Joi.string().min(1).max(5000).required(),
            companyname: Joi.string().min(1).max(5000).required(),
            companylocation: Joi.string().min(1).max(5000).required(),
            occupation: Joi.string().min(1).max(5000).required(),
            partners: Joi.array().min(0).max(5000),
            events: Joi.array().min(0).max(5000),
            vacancies: Joi.array().min(0).max(5000),
            projects: Joi.array().min(0).max(5000),
            feedbackform: Joi.string().min(1).max(5000)
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(1).max(5000),
            age: Joi.number().min(1).max(3000),
            field: Joi.string().min(1).max(5000),
            companyname: Joi.string().min(1).max(5000),
            companylocation: Joi.string().min(1).max(5000),
            occupation: Joi.string().min(1).max(5000),
            partners: Joi.array().min(0).max(5000),
            events: Joi.array().min(0).max(5000),
            vacancies: Joi.array().min(0).max(5000),
            projects: Joi.array().min(0).max(5000),
            feedbackform: Joi.string().min(1).max(5000)
        }

        return Joi.validate(request, updateSchema)
    }, 
}
