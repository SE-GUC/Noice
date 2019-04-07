const axios = require('axios');

const functions = {
    viewVacancy: async () => {
        const vacancy = await axios.get('http://localhost:3000/api/vacancy/')
        return vacancy
    },

    viewAllFinalVacancies: async () => {
        const vacancy = await axios.get('http://localhost:3000/api/vacancy/final/1/')
        return vacancy
    },

    viewVacancyByID: async (id) => {
        const vacancy = await axios.get(`http://localhost:3000/api/vacancy/${id}`)
        return vacancy
    },

    createVacancy:async (req) => {
        const vacancy = await axios.post('http://localhost:3000/api/vacancy/',req)
        return vacancy
    },

    updateVacancy: async (id,req) => {
        const vacancy = await axios.put(`http://localhost:3000/api/vacancy/${id}`,req)
        return vacancy
    },

    deleteVacancy: async (id) => {
        const vacancy = await axios.delete(`http://localhost:3000/api/vacancy/${id}`)
        return vacancy
    }
};
     
                
        
    module.exports = functions;
        