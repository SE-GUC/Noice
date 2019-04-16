const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            title: Joi.string().min(1).max(500).required(),
            careerLevel: Joi.string().min(3).max(500).required(),
            jobDescription: Joi.string().min(3).max(100).required(),
            educationLevel: Joi.string().min(0).max(3000),
            skillsRequired: Joi.string().min(0).max(3000),
            tags: Joi.array()

        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            title: Joi.string().min(1).max(500),
            careerLevel: Joi.string().min(3).max(500),
            jobDescription: Joi.string().min(3).max(100),
            educationLevel: Joi.string().min(0).max(3000),
            skillsRequired: Joi.string().min(0).max(3000),
            applicants: Joi.array(),
            tags: Joi.array(),
        }

        return Joi.validate(request, updateSchema)
    }, applyValidation: request => {
        const applySchema = {
            id: Joi.string().min(3).max(30),
            
        }

        return Joi.validate(request, applySchema)
    }
}