const axios = require('axios');
const functions = {

    //jest for posting all info of a member

        postMember: async () => {
        const postedMember = await axios.post('http://localhost:3000/api/member',req)
        return postedMember
        },
        //jest for viwing all members
        viewMembers: async () => {
            const viewedMember = await axios.get('http://localhost:3000/api/member')
            return viewedMember
        },
        // view member by id
        viewPartnerid: async (id) => {
            const member = await axios.get(`http://localhost:3000/api/member/${id}`)
            return member
        },

        //jest for updating a member
        updateMember: async (id,req) => {
                const updatedMember = await axios.put(`http://localhost:3000/api/member/${id}`,req)
                return updatedMember 
        },
        //jest for deleting member by id
        deleteMember: async (id) => {
            const deletedMember = await axios.delete(`http://localhost:3000/api/member/${id}`)
            return deletedMember
        },
                deleteMember: async (id) => {
            const deletedMember = await axios.delete(`http://localhost:3000/api/member/${id}`)
            return deletedMember
        },
        //viewvacancies
            viewVacancies: async () => {
                const viewedVacancy = await axios.get('http://localhost:3000/api/vacancies')
                return viewedVacancy
        },
        viewLocationDate: async (date) => {
            const loc = await axios.get(`http://localhost:3000/api/member/${date}`)
            return loc
        },
};
module.exports = functions;