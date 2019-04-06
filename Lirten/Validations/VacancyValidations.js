const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            careerLevel: Joi.string().min(3).max(500).required(),
            jobDescription: Joi.string().min(3).max(100).required(),
            jobType: Joi.string().min(3).max(100).required(),
            educationLevel: Joi.string().min(0).max(3000).required(),
            time: Joi.string().min(3).max(500).required(),
            skillsRequired: Joi.string().min(0).max(3000).required(),
          

        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            careerLvl: Joi.string().min(3).max(500),
            jobDesc: Joi.string().min(3).max(100),
            jobTyp: Joi.string().min(3).max(100),
            educLvl: Joi.string().min(0).max(3000),
            empID: Joi.number().min(3).max(500),
            time: Joi.string().raw().min(3).max(500),
            skillsReq: Joi.string().min(0).max(3000),
            jobReq: Joi.string().min(0).max(3000),
            applicants: Joi.array()

        }

        return Joi.validate(request, updateSchema)
    }, 
}