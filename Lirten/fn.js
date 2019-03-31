
const axios = require('axios');

const functions = {
     
        viewAllAdmins: async () => {
                const response = await axios.get(`http://localhost:3000/api/admins/`)
                return response
        },
        deleteAdmin: async (body) => {
                const response = await axios.push(`http://localhost:3000/api/admins/:${id}`)
                return response
        },
        createAdmin: async (body) => {
                const response = await axios.delete(`http://localhost:3000/api/admins/create`,body)
                return response
        },
        
        
        
        findPartnerByIdFromAdmin:async (id) => {
                const response = await axios.get(`http://localhost:3000/api/admins/findPartnerById/${id}`)
                return response
        }









}     
    
        /*viewPartner: async () => {
        const books = await axios.post('http://localhost:3000/api/partners/')
        return books
        },

        viewPartnerid: async (id) => {
                const books = await axios.get(`http://localhost:3000/api/partners/${id}`)
                return books
                },

        deletePartner: async (id) => {
                const books = await axios.delete(`http://localhost:3000/api/partners/${id}`)
                return books
                },
        
        updatePartner: async (id,req) => {
                const books = await axios.put(`http://localhost:3000/api/partners/${id}`,req)
                return books
                },
                
        

        createpartner:async (req) => {
                
                const partners = await axios.post('http://localhost:3000/api/partners/',req)
                return partners

        },
        createvacancyad:async (req) => {
                
                const partners = await axios.post('http://localhost:3000/api/partners/createvacancyad',req)
                return partners

        },
        createrequest:async (req) => {
                
                const partners = await axios.post('http://localhost:3000/api/partners/requestvacancyad',req)
                return partners

        },
        deletePartner: async () => {
                const books = await axios.delete(`http://localhost:3000/api/partners/${id}`)
                return books
                },
        viewRequest:async (id) => {
                const books = await axios.get(`http://localhost:3000/api/vacancyrequests/${id}`)
                return books
        },
        viewVacancyad:async (id) => {
                const books = await axios.get(`http://localhost:3000/api/vacancyads/${id}`)
                return books
        },

        viewstatusVacancyad:async (id,idd) => {
                const books = await axios.get(`http://localhost:3000/api/partners/${id}/viewads/${idd}`)
                return books
        },
        editVacancyad:async (id,req) => {
                const books = await axios.put(`http://localhost:3000/api/partners//editvacancyad/${id}`,req)
                return books
        }
                

        
};
*/
module.exports = functions;