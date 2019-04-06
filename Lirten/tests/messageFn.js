const axios = require('axios');

const functions = {
	    viewMessage: async () => {
        const books = await axios.get('http://localhost:3000/api/message/')
        return books
        },

        viewMessageid: async (id) => {
                const books = await axios.get(`http://localhost:3000/api/message/${id}`)
                return books
                },

        deleteMessage: async (id) => {
                const books = await axios.delete(`http://localhost:3000/api/message/${id}`)
                return books
                },
        
        createMessage:async (req) => {
                
                const partners = await axios.post("http://localhost:3000/api/message",req)
                return partners

        }
        
                

        
};
module.exports = functions;