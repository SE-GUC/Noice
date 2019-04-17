const BaseJoi = require('joi')
const Extension = require('joi-date-extensions')
const Joi = BaseJoi.extend(Extension)

module.exports = {
    createPartnerValidation: request => {
        const createSchema = {
            email:Joi.string().email().required(),
            password:Joi.string().min(3).max(500).required(),
            firstName:Joi.string().min(3).max(500).required(),
            middleName:Joi.string().min(3).max(500).required(),
            lastName:Joi.string().min(3).max(500).required(),
            birthDate:Joi.date().format('DD-MM-YYYY').required(),
            gender: Joi.string().only("male","female").min(1).max(7).required(),
            address:Joi.string().min(3).max(500).required(),
            phoneNumber:Joi.string().min(3).max(500).required(),
            typeOfUser:Joi.string().only("Co-working Space Owner","Member","Partner").required(),
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
                    startDate: Joi.date().format('DD-MM-YYYY').required(),
                    endDate: Joi.date().format('DD-MM-YYYY').required()
                }
            )),
            projects: Joi.array().items(Joi.object().keys(
                {
                    id: Joi.string().required(),
                    name: Joi.string().required(),
                    startDate: Joi.date().format('DD-MM-YYYY').required(),
                    endDate: Joi.date().format('DD-MM-YYYY').required()
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

    updatePartnerValidation: request => {
        const updateSchema = {
            email:Joi.string().email(),
            password:Joi.string().min(3).max(500),
            firstName:Joi.string().min(3).max(500),
            middleName:Joi.string().min(3).max(500),
            lastName:Joi.string().min(3).max(500),
            birthDate:Joi.date().format('DD-MM-YYYY'),
            gender: Joi.string().only("male","female").min(1).max(7),
            address:Joi.string().min(3).max(500),
            phoneNumber:Joi.string().min(3).max(500),
            typeOfUser:Joi.string().only("Co-working Space Owner","Member","Partner"),
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
                    startDate: Joi.date().format('DD-MM-YYYY'),
                    endDate: Joi.date().format('DD-MM-YYYY')
                }
            )),
            projects: Joi.array().items(Joi.object().keys(
                {
                    id: Joi.string(),
                    name: Joi.string(),
                    startDate: Joi.date().format('DD-MM-YYYY'),
                    endDate: Joi.date().format('DD-MM-YYYY')
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
    createMemberValidation: request => {
        const createSchema = {
            email:Joi.string().email().required(),
            password:Joi.string().min(3).max(500).required(),
            firstName:Joi.string().min(3).max(500).required(),
            middleName:Joi.string().min(3).max(500).required(),
            lastName:Joi.string().min(3).max(500).required(),
            birthDate:Joi.date().format('DD-MM-YYYY').required(),
            gender: Joi.string().only("male","female").min(1).max(7).required(),
            address:Joi.string().min(3).max(500).required(),
            phoneNumber:Joi.string().min(3).max(500).required(),
            typeOfUser:Joi.string().only("Co-working Space Owner","Member","Partner").required(),
            skills: Joi.string().min(1).max(5000).required(),
            interests: Joi.string().min(1).max(5000).required(),
            pastEvents: Joi.array().items(Joi.object().keys(
                {
                    name:Joi.string().min(1).max(5000).required(),
                    startDate: Joi.string().min(1).max(5000).required(),
                    endDate: Joi.string().min(1).max(5000).required()
                }
            )),
            projectsCompleted: Joi.string().min(1).max(5000).required(),
            reviewsReceived: Joi.string().min(1).max(5000).required(),
            certificatesHeld: Joi.string().min(1).max(5000).required(),
        }

        return Joi.validate(request, createSchema)
    },
    updateMemberValidation: request => {
        const updateSchema = {
            email:Joi.string().email(),
            password:Joi.string().min(3).max(500),
            firstName:Joi.string().min(3).max(500),
            middleName:Joi.string().min(3).max(500),
            lastName:Joi.string().min(3).max(500),
            birthDate:Joi.date().format('DD-MM-YYYY'),
            gender: Joi.string().only("male","female").min(1).max(7),
            address:Joi.string().min(3).max(500),
            phoneNumber:Joi.string().min(3).max(500),
            typeOfUser:Joi.string().only("Co-working Space Owner","Member","Partner"),
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
            certificatesHeld: Joi.string().min(1).max(5000),
        }

        return Joi.validate(request, updateSchema)
    }, 
    createLocationValidation: request => {
        const createSchema = {
            email:Joi.string().email().required(),
            password:Joi.string().min(3).max(500).required(),
            firstName:Joi.string().min(3).max(500).required(),
            middleName:Joi.string().min(3).max(500).required(),
            lastName:Joi.string().min(3).max(500).required(),
            birthDate:Joi.date().format('DD-MM-YYYY').required(),
            gender: Joi.string().only("male","female").min(1).max(7).required(),
            address:Joi.string().min(3).max(500).required(),
            phoneNumber:Joi.string().min(3).max(500).required(),
            typeOfUser:Joi.string().only("Co-working Space Owner","Member","Partner").required(),
            NameOfPlace: Joi.string().min(3).max(500).required(),
            workingPlaceDepartments: Joi.array().items(Joi.object().keys({
                nameOfDepartments: Joi.string().required(),
                City: Joi.string().min(3).max(100).required(),
                Region: Joi.string().min(3).max(100).required(),
                startTime: Joi.date().format('HH:mm').required(),
                endTime: Joi.date().format('HH:mm').required(),
                rate: Joi.number().min(0).max(5).required(),
            }))
        }

        return Joi.validate(request, createSchema)
    },
    updateLocationValidation: request => {
        const updateSchema = {
            email:Joi.string().email(),
            password:Joi.string().min(3).max(500),
            firstName:Joi.string().min(3).max(500),
            middleName:Joi.string().min(3).max(500),
            lastName:Joi.string().min(3).max(500),
            birthDate:Joi.date().format('DD-MM-YYYY'),
            gender: Joi.string().only("male","female").min(1).max(7),
            address:Joi.string().min(3).max(500),
            phoneNumber:Joi.string().min(3).max(500),
            typeOfUser:Joi.string().only("Co-working Space Owner","Member","Partner"),
            NameOfPlace: Joi.string().min(3).max(500),
            date: Joi.date().format('DD-MM-YYYY'),
            workingPlaceDepartments: Joi.array().items(Joi.object().keys({
                nameOfDepartments: Joi.string(),
                City: Joi.string().min(3).max(100),
                Region: Joi.string().min(3).max(100),
                startTime: Joi.date().format('HH:mm'),
                endTime: Joi.date().format('HH:mm'),
                rate: Joi.number().min(0).max(5),
            }))
        }

        return Joi.validate(request, updateSchema)
    }, 
       registerValidation: request => {
        const registerValidation = {
            email:Joi.string().email(),
            password:Joi.string().min(3).max(500),
            firstName:Joi.string().min(3).max(500),
            middleName:Joi.string().min(3).max(500),
            lastName:Joi.string().min(3).max(500)
        }

        return Joi.validate(request, registerValidation)
    }, 
}
