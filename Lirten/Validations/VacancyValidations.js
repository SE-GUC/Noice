const BaseJoi = require('joi')
const dateExt = require('joi-date-extensions')
const Joi = BaseJoi.extend(dateExt)

module.exports = {
    createValidation: request => {
        const createSchema = {
            careerLvl: Joi.string().min(3).max(500).required(),
            jobDesc: Joi.string().min(3).max(100).required(),
            jobTyp: Joi.string().min(3).max(100).required(),
            educLvl: Joi.string().min(0).max(3000).required(),
            empID: Joi.string().min(3).max(500).required(),
            skillsReq: Joi.string().min(0).max(3000).required(),
            jobReq: Joi.string().min(0).max(3000).required(),
            proposals: Joi.array().optional().items(Joi.object().keys(
                {
                    bid: Joi.number().required().min(0),
                    duration: Joi.string().required().only('LESS THAN A WEEK','LESS THAN 1 MONTH','1 TO 3 MONTHS','3 TO 6 MONTHS','MORE THAN 6 MONTHS'),
                    coverLetter: Joi.string().required().min(1).max(500),
                    attachments: Joi.array().optional().items(Joi.string()),
                    memberId:Joi.string().min(1).required(),
                    _id:Joi.string().optional()
                }
            ))
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            careerLvl: Joi.string().min(3).max(500),
            jobDesc: Joi.string().min(3).max(100),
            jobTyp: Joi.string().min(3).max(100),
            educLvl: Joi.string().min(0).max(3000),
            empID: Joi.string().min(3).max(500),
            skillsReq: Joi.string().min(0).max(3000),
            jobReq: Joi.string().min(0).max(3000),
            proposals: Joi.array().optional().items(Joi.object().keys(
                {
                    bid: Joi.number().required().min(0),
                    duration: Joi.string().required().only('LESS THAN A WEEK','LESS THAN 1 MONTH','1 TO 3 MONTHS','3 TO 6 MONTHS','MORE THAN 6 MONTHS'),
                    coverLetter: Joi.string().required().min(1).max(500),
                    attachments: Joi.array().optional().items(Joi.string()),
                    memberId:Joi.string().min(1).required(),
                    _id:Joi.string().optional()
                }
            ))
        }

        return Joi.validate(request, updateSchema)
    }, 
}