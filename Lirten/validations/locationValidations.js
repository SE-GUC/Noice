const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            NameOfPlace: Joi.string().min(3).max(500).required(),
            City: Joi.string().min(3).max(100).required(),
            Region: Joi.string().min(3).max(100).required(),
            Capacity: Joi.number().min(0).max(3000).required(),
            startingHours: Joi.string().min(3).max(500).required(),
            endingHours: Joi.string().min(3).max(500).required(),
            rate: Joi.number().min(0).max(3000).required(),
            numberOfWorkingDepartments: Joi.number().min(0).max(3000).required(),
            workingPlaceDepartments: Joi.array().required(),
            tags: Joi.array(),
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            NameOfPlace: Joi.string().min(3).max(500).required(),
            City: Joi.string().min(3).max(100).required(),
            Region: Joi.string().min(3).max(100).required(),
            Capacity: Joi.number().min(0).max(3000).required(),
            startingHours: Joi.string().min(3).max(500).required(),
            endingHours: Joi.string().min(3).max(500).required(),
            rate: Joi.number().min(0).max(3000).required(),
            numberOfWorkingDepartments: Joi.number().min(0).max(3000).required(),
            workingPlaceDepartments: Joi.array().required(),
            tags: Joi.array(),
        }

        return Joi.validate(request, updateSchema)
    }, 
}
