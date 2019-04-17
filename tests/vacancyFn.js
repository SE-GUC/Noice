const axios = require('axios');

const functions = {

    searchVacancy:async (req) => {
        const vacancy = await axios.post('http://localhost:5000/api/vacancy/search',req)
        return vacancy
    },

    viewVacancy: async () => {
        const vacancy = await axios.get('http://localhost:5000/api/vacancy/')
        return vacancy
    },

    viewAllFinalVacancies: async () => {
        const vacancy = await axios.get('http://localhost:5000/api/vacancy/final/1/')
        return vacancy
    },

    viewVacancyByID: async (id) => {
        const vacancy = await axios.get(`http://localhost:5000/api/vacancy/${id}`)
        return vacancy
    },

    createVacancy:async (req) => {
        const vacancy = await axios.post('http://localhost:5000/api/vacancy/',req)
        return vacancy
    },

    updateVacancy: async (id,req) => {
        const vacancy = await axios.put(`http://localhost:5000/api/vacancy/${id}`,req)
        return vacancy
    },

    deleteVacancy: async (id) => {
        const vacancy = await axios.delete(`http://localhost:5000/api/vacancy/${id}`)
        return vacancy
    },
    
    
    
    //application on a vacancy
    applyOnVacancy: async(id,body)=>{
    const vacancy = await axios.put(`http://localhost:5000/api/vacancy/apply/${id}`,body)
    return vacancy
    },  
    viewApplicants: async(id)=>{
        const vacancy = await axios.get(`http://localhost:5000/api/vacancy/apply/viewAllApplicants/${id}`)
        return vacancy
         
    },
    viewNumberOfApplicants: async(id)=>{
        const vacancy = await axios.get(`http://localhost:5000/api/vacancy/apply/viewNumberOfApplicants/${id}`)
        return vacancy
        
    },
    cancelMyApplication: async(id,body)=>{
        const vacancy = await axios.put(`http://localhost:5000/api/vacancy/apply/closeVacancy/${id}`,body)
        return vacancy
        
    },
    closeVacancy: async(id,body)=>{
        const vacancy = await axios.put(`http://localhost:5000/api/vacancy/apply/closeVacancy/${id}`,body)
        return vacancy
    },
    
};
     
                
        
    module.exports = functions;
        