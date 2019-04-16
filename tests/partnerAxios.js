const axios = require('axios');

const functions = {


	viewPartner: async () => {
                const books = await axios.get('http://localhost:5000/api/users/partners/')
                return books
                },

        viewPartnerid: async (id) => {
                const books = await axios.get(`http://localhost:5000/api/users/partners/${id}`)
                return books
                },

        deletePartner: async (id) => {
                const books = await axios.delete(`http://localhost:5000/api/users/partners/${id}`)
                return books
                },
        
        updatePartner: async (id,req) => {
                const books = await axios.put(`http://localhost:5000/api/users/partners/${id}`,req)
                return books
                },

        createpartner:async (req) => {
                const partners = await axios.post("http://localhost:5000/api/users/partners",req)
                return partners
                }
                

        
};
module.exports = functions;