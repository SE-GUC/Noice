const Joi = require('joi')


module.exports = {
    createValidation: request => {
        const createSchema = {
            companyName: Joi.string().min(3).max(500).required(),
            companyLocation: Joi.string().min(3).max(100).required(),
            field: Joi.string().min(10).max(70).required(),
            email: Joi.string().required(),
            password: Joi.string().required(),
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
            companyName: Joi.string().min(3).max(500).required(),
            companyLocation: Joi.string().min(3).max(100).required(),
            field: Joi.string().min(10).max(70).required(),
            email: Joi.string().required(),
            password: Joi.string().required(),
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
        return Joi.validate(request, updateSchema)
    }, 

}