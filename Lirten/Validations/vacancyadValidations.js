const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            vacancyname: Joi.string().min(1).max(5000).required(),
            description: Joi.string().min(1).max(5000).required(),
            location: Joi.string().min(1).max(5000).required(),
            email: Joi.string().min(1).max(5000).required(),
            phonenumber: Joi.string().min(1).max(5000).required(),
            requirments: Joi.string().min(1).max(5000).required(),
            duration: Joi.string().min(1).max(5000).required(),
            salary: Joi.string().min(1).max(5000).required(),
            ownername: Joi.string().min(1).max(5000).required(),
            ownerid: Joi.string().min(1).max(5000).required(),
            startdate: Joi.string().min(1).max(5000).required(),
            enddate: Joi.string().min(1).max(5000).required(),
            statue: Joi.boolean().required(),
            applied: Joi.number().min(0).max(5000).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            vacancyname: Joi.string().min(1).max(5000),
            description: Joi.string().min(1).max(5000),
            location: Joi.string().min(1).max(5000),
            email: Joi.string().min(1).max(5000),
            phonenumber:Joi.string().min(1).max(5000),
            requirments:Joi.string().min(1).max(5000),
            duration: Joi.string().min(1).max(5000),
            salary: Joi.string().min(1).max(5000),
            ownername: Joi.string().min(1).max(5000),
            ownerid: Joi.string().min(1).max(5000),
            startdate: Joi.string().min(1).max(5000),
            enddate: Joi.string().min(1).max(5000),
            statue: Joi.boolean(),
            applied: Joi.number().min(0).max(5000)
        }

        return Joi.validate(request, updateSchema)
    }, 
}