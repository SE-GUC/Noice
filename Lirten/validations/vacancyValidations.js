const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            careerLvl: Joi.string().valid('ENRTY LEVEL','INTERMEDIATE LEVEL','PROFESSIONAL LEVEL').required(),
            jobDesc: Joi.string().min(20).required(),
            jobTyp: Joi.string().min(1).required(),
            skillsReq: Joi.array(),
            jobReq: Joi.string().min(20).required(),
            empID: Joi.string().required(),
            educLvl: Joi.string().required(),
            location: Joi.string().required(),
            salary: Joi.number().required(),
            dailyHours: Joi.number().required(),
            owner: Joi.string().required()
        }

        return Joi.validate(request, createSchema)
    },
}