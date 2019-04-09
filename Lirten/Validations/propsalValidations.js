const BaseJoi = require('joi')
const dateExt = require('joi-date-extensions')
const Joi = BaseJoi.extend(dateExt)

module.exports = {
    createValidation: request => {
        const createSchema = {
                    bid: Joi.number().required().min(0),
                    duration: Joi.string().required().only('LESS THAN A WEEK','LESS THAN 1 MONTH','1 TO 3 MONTHS','3 TO 6 MONTHS','MORE THAN 6 MONTHS'),
                    coverLetter: Joi.string().required().min(1).max(500),
                    attachments: Joi.array().optional().items(Joi.string()),
                    memberId:Joi.string().min(1).required(),
                    _id:Joi.string().optional()
        }
        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            bid: Joi.number().required().min(0),
            duration: Joi.string().required().only('LESS THAN A WEEK','LESS THAN 1 MONTH','1 TO 3 MONTHS','3 TO 6 MONTHS','MORE THAN 6 MONTHS'),
            coverLetter: Joi.string().required().min(1).max(500),
            attachments: Joi.array().optional().items(Joi.string()),
            memberId:Joi.string().min(1).required(),
            _id:Joi.string().optional()
}
        return Joi.validate(request, updateSchema)
    }, 
}