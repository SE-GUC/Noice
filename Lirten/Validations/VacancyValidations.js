const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            careerLevel: Joi.string().min(3).max(500).required(),
            jobDescription: Joi.string().min(3).max(100).required(),
            educationLevel: Joi.string().min(0).max(3000).required(),
            skillsRequired: Joi.string().min(0).max(3000).required(),
            partnerId: Joi.string().min(0).max(25),
            applicants: Joi.array(),
            tags: Joi.array()

        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            careerLevel: Joi.string().min(3).max(500),
            jobDescription: Joi.string().min(3).max(100),
            educationLevel: Joi.string().min(0).max(3000),
            skillsRequired: Joi.string().min(0).max(3000),
            applicants: Joi.array(),
            tags: Joi.array(),
        }

        return Joi.validate(request, updateSchema)
    }, 
}