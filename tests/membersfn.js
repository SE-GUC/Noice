const axios = require('axios')

const functions = {
    viewMember : async () =>{
        const members = await axios.get('http://localhost:5000/api/users/member/')
        return members
    },

    viewMemberId : async(id) =>{
        const member = await axios.get(`http://localhost:5000/api/users/member/${id}`)
        return member
    },
    updateMember : async(id,req) =>{
        const member = await axios.put(`http://localhost:5000/api/users/member/${id}`, req)
        return member
    },
    createMember : async(req) =>{
        const member = await axios.post('http://localhost:5000/api/users/member/', req)
        return member
    },
    deleteMember : async(id) =>{
        const member = await axios.delete(`http://localhost:5000/api/users/member/${id}`)
        return member
    },
    //admin stuff
    viewMemberByAdmin : async () =>{
        const members = await axios.get('http://localhost:5000/api/admins/member/')
        return members
    },

    viewMemberIdByAdmin : async(id) =>{
        const member = await axios.get(`http://localhost:5000/api/admins/member/${id}`)
        return member
    },
    updateMemberByAdmin : async(id,req) =>{
        const member = await axios.put(`http://localhost:5000/api/admins/member/${id}`, req)
        return member
    },
    createMemberByAdmin : async(req) =>{
        const member = await axios.post('http://localhost:5000/api/admins/member/', req)
        return member
    },
    deleteMemberByAdmin : async(id) =>{
        const member = await axios.delete(`http://localhost:5000/api/admins/member/${id}`)
        return member
    },
    //partner stuff
    viewMemberByPartner : async () =>{
        const members = await axios.get('http://localhost:5000/api/admins/member/')
        return members
    },
    viewLocationByMember : async () =>{
        const members = await axios.get('http://localhost:5000/api/users/member/location/')
        return members
    },
    //view members through location
    viewMemberByLocation : async () =>{
        const members = await axios.get('http://localhost:5000/api/users/location/member/')
        return members
    }
}

module.exports = functions