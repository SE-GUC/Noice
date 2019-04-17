const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            title: Joi.string().min(1).max(500).required(),
            careerLevel: Joi.string().min(3).max(500).required(),
            jobDescription: Joi.string().min(3).max(100).required(),
            educationLevel: Joi.string().min(0).max(3000),
            partnerId: Joi.string().min(0).max(3000),
            time: Joi.string(),
            skillsRequired: Joi.string().min(0).max(3000),
            applicants: Joi.array(),
            status: Joi.boolean(),
            closed: Joi.boolean(),
            tags: Joi.array()

        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            title: Joi.string().min(1).max(500).required(),
            careerLevel: Joi.string().min(3).max(500).required(),
            jobDescription: Joi.string().min(3).max(100).required(),
            educationLevel: Joi.string().min(0).max(3000),
            partnerId: Joi.string().min(0).max(3000),
            time: Joi.string(),
            skillsRequired: Joi.string().min(0).max(3000),
            applicants: Joi.array(),
            status: Joi.boolean(),
            closed: Joi.boolean(),
            tags: Joi.array()
        }

        return Joi.validate(request, updateSchema)
    }, applyValidation: request => {
        const applySchema = {
            id: Joi.string().min(3).max(30),
            
        }

        return Joi.validate(request, applySchema)
    }
}