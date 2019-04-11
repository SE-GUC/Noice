const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            careerLvl: Joi.number().min(0).max(3000).required(),
            jobDesc: Joi.string().min(3).max(100).required(),
            jobTyp: Joi.string().min(3).max(100).required(),
            educLvl: Joi.number().min(0).max(3000).required(),
            empID: Joi.number().min(0).max(3000).required(),
            time: Joi.date().required(),
            skillsReq: Joi.string().min(3).max(100).required(),
            jobReq: Joi.string().min(3).max(100).required(),
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            careerLvl: Joi.number().min(0).max(3000),
            jobDesc: Joi.string().min(3).max(100),
            jobTyp: Joi.string().min(3).max(100),
            educLvl: Joi.number().min(0).max(3000),
            empID: Joi.number().min(0).max(3000),
            time: Joi.date(),
            skillsReq: Joi.string().min(3).max(100),
            jobReq: Joi.string().min(3).max(100),
        }

        return Joi.validate(request, updateSchema)
    }, 
}
