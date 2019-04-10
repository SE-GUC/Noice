const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(1).max(5000).required(),
            age: Joi.number().min(1).max(5000).required(),
            gender:Joi.string().only("male","female").min(1).max(5000).required(),
            address:Joi.string().min(1).max(5000).required(),
            email: Joi.string().min(1).max(5000).required(),
            phoneNumber: Joi.string().min(1).max(5000).required(),
            skills: Joi.string().min(1).max(5000).required(),
            interests: Joi.string().min(1).max(5000).required(),
            pastEvents: Joi.array().items(Joi.object().keys(
                {
                    id:Joi.string().min(1).max(5000).required(),
                    name:Joi.string().min(1).max(5000).required(),
                    startDate: Joi.string().min(1).max(5000).required(),
                    endDate: Joi.string().min(1).max(5000).required()
                }
            )),
            projectsCompleted: Joi.string().min(1).max(5000).required(),
            reviewsReceived: Joi.string().min(1).max(5000).required(),
            certificaesHeld: Joi.string().min(1).max(5000).required(),
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(1).max(5000),
            age: Joi.number().min(1).max(5000),
            gender:Joi.string().only("male","female").min(1).max(5000),
            address:Joi.string().min(1).max(5000),
            email: Joi.string().min(1).max(5000),
            phoneNumber: Joi.string().min(1).max(5000),
            skills: Joi.string().min(1).max(5000),
            interests: Joi.string().min(1).max(5000),
            pastEvents: Joi.array().items(Joi.object().keys(
                {
                    id:Joi.string().min(1).max(5000),
                    name:Joi.string().min(1).max(5000),
                    startDate: Joi.string().min(1).max(5000),
                    endDate: Joi.string().min(1).max(5000)
                }
            )),
            projectsCompleted: Joi.string().min(1).max(5000),
            reviewsReceived: Joi.string().min(1).max(5000),
            certificaesHeld: Joi.string().min(1).max(5000),
        }

        return Joi.validate(request, updateSchema)
    }, 
}