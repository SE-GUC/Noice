const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            careerLvl: Joi.string().min(3).max(500).required(),
            jobDesc: Joi.string().min(3).max(100).required(),
            jobTyp: Joi.string().min(3).max(100).required(),
            educLvl: Joi.string().min(0).max(3000).required(),
            empID: Joi.number().min(3).max(500).required(),
            time: Joi.date().min(3).max(500).required(),
            skillsReq: Joi.string().min(0).max(3000).required(),
            jobReq: Joi.string().min(0).max(3000).required(),
            id: Joi.string().min(0).max(3000).required(),

        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            careerLvl: Joi.string().min(3).max(500).required(),
            jobDesc: Joi.string().min(3).max(100).required(),
            jobTyp: Joi.string().min(3).max(100).required(),
            educLvl: Joi.string().min(0).max(3000).required(),
            empID: Joi.number().min(3).max(500).required(),
            time: Joi.date().min(3).max(500).required(),
            skillsReq: Joi.string().min(0).max(3000).required(),
            jobReq: Joi.string().min(0).max(3000).required(),
            id: Joi.string().min(0).max(3000).required(),

        }

        return Joi.validate(request, updateSchema)
    }, 
}