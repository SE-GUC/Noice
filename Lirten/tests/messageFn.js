const axios = require('axios');

const functions = {
	    viewMessage: async () => {
        const messages = await axios.get('http://localhost:3000/api/message/')
        return messages
        },

        viewMessageid: async (id) => {
                const messages = await axios.get(`http://localhost:3000/api/message/${id}`)
                return messages
                },

        deleteMessage: async (id) => {
                const messages = await axios.delete(`http://localhost:3000/api/message/${id}`)
                return messages
                },
        
        createMessage:async (req) => {
                
                const messages = await axios.post("http://localhost:3000/api/message",req)
                return messages

        }
        
                

        
};
module.exports = functions;
