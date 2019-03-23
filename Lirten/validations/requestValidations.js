const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            title: Joi.string().min(3).max(500).required(),
            Company: Joi.string().min(3).max(100).required(),
            Location: Joi.string().min(3).max(100).required(),
            CareerLevel: Joi.string().min(3).max(200).required(),
            EducationLevel: Joi.string().min(3).max(200).required(),
            Salary: Joi.number().min(100).required(),
            Numberofapplicants: Joi.number().min(0),
            TravelFrequency: Joi.string().min(3).max(200).required(),
            Vacancies: Joi.string().min(3).max(3000).required(),
            Language: Joi.string().min(3).max(3000).required(),
            ExperienceNeeded: Joi.string().min(3).max(300).required(),
            JobType: Joi.string().min(3).max(300).required(),
            DescriptionofJob: Joi.string().min(50).max(5000).required(),
            JobRequirements: Joi.string().min(50).max(5000).required(),
            CompanyInformation: Joi.string().min(50).max(5000),
            Status: Joi.string().min(1).max(30).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            title: Joi.string().min(3).max(500),
            Location: Joi.string().min(3).max(100),
            CareerLevel: Joi.string().min(3).max(200),
            EducationLevel: Joi.string().min(3).max(200),
            Salary: Joi.number().min(100),
            Numberofapplicants: Joi.number().min(100),
            TravelFrequency: Joi.string().min(3).max(200),
            Vacancies: Joi.string().min(3).max(3000),
            Language: Joi.string().min(3).max(3000),
            ExperienceNeeded: Joi.string().min(3).max(300),
            JobType: Joi.string().min(3).max(300),
            DescriptionofJob: Joi.string().min(50).max(5000),
            JobRequirements: Joi.string().min(50).max(5000),
            CompanyInformation: Joi.string().min(50).max(5000),
            Status: Joi.string().min(1).max(30)
        }

        return Joi.validate(request, updateSchema)
    }, 
}