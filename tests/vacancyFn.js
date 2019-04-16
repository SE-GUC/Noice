const axios = require('axios');
const functions = {


    
    searchVacancy:async (req) => {
        const vacancy = await axios.post('http://localhost:5000/api/vacancy/search',req)
        return vacancy
    },
};
     

module.exports = functions;

