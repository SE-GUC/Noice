const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            NameOfPlace: Joi.string().min(3).max(500).required(),
            ownerName: Joi.string().min(3).max(500).required(),
            workingPlaceDepartments: Joi.array().items(Joi.object().keys({
                nameOfDepartments: Joi.string().required(),
            City: Joi.string().min(3).max(100).required(),
            Region: Joi.string().min(3).max(100).required(),
                startTime: Joi.string().required(),
                endTime: Joi.string().required(),
                rate: Joi.number().min(0).max(5).required(),
                isDepartmentAvailable: Joi.array().items(Joi.object().keys({
                    nameOfSubdepartment: Joi.string().required(),
                    isAvailable: Joi.boolean().required(),
                    capacity: Joi.number().min(0).max(3000).required(),
                }))
            }))        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            NameOfPlace: Joi.string().min(3).max(500),
            ownerName: Joi.string().min(3).max(500),
            workingPlaceDepartments: Joi.array().items(Joi.object().keys({
                nameOfDepartments: Joi.string(),
                City: Joi.string().min(3).max(100),
                Region: Joi.string().min(3).max(100),
                startTime: Joi.string(),
                endTime: Joi.string(),
                rate: Joi.number().min(0).max(5),
                isDepartmentAvailable: Joi.array().items(Joi.object().keys({
                    nameOfSubdepartment: Joi.string(),
                    isAvailable: Joi.boolean(),
                    capacity: Joi.number().min(0).max(3000),
                }))
            }))
        }

        return Joi.validate(request, updateSchema)
    }, 
}
