const Joi = require('joi')


module.exports = {
    createValidation: request => {
        const createSchema = {
            companyName: Joi.string().min(3).max(500).required(),
            companyLocation: Joi.string().min(3).max(100).required(),
            field: Joi.string().min(5).max(70).required(),
            partners: Joi.array().items(Joi.object().keys(
                {
                    id: Joi.string().required()
                }
            )),
            events: Joi.array().items(Joi.object().keys(
                {
                    id: Joi.string().required(),
                    name: Joi.string().required(),
                    startDate: Joi.date().required(),
                    endDate: Joi.date().required()
                }
            )),
            projects: Joi.array().items(Joi.object().keys(
                {
                    id: Joi.string().required(),
                    name: Joi.string().required(),
                    startDate: Joi.date().required(),
                    endDate: Joi.date().required()
                }
            )),
            vacancies: Joi.array().items(Joi.object().keys(
                {
                    id: Joi.string().required()
                }
            )),
        }
        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            companyName: Joi.string().min(3).max(500),
            companyLocation: Joi.string().min(3).max(100),
            field: Joi.string().min(10).max(70),
            partners: Joi.array().items(Joi.object().keys(
                {
                    id: Joi.string()
                }
            )),
            events: Joi.array().items(Joi.object().keys(
                {
                    id: Joi.string(),
                    name: Joi.string(),
                    startDate: Joi.date(),
                    endDate: Joi.date()
                }
            )),
            projects: Joi.array().items(Joi.object().keys(
                {
                    id: Joi.string(),
                    name: Joi.string(),
                    startDate: Joi.date(),
                    endDate: Joi.date()
                }
            )),
            vacancies: Joi.array().items(Joi.object().keys(
                {
                    id: Joi.string()
                }
            )),
        }
        return Joi.validate(request, updateSchema)
    }, 

}