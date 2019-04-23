import {GETVACANCY,GET_APPLICANTS,CLOSE_APP,ACCEPT_APP} from './vacancyTypes';

const axios = require('axios');
export const  getVacancies = () => async dispatch =>{
     await axios.get('http://localhost:5000/api/vacancy/')
    .then(res => dispatch({
        type: GETVACANCY,
        payload: res.data.data
             }) );
             
     };
     export const getApplicants = () => dispatch => {
        axios.get("http://localhost:5000/api/vacancy/")
        .then(res =>
            dispatch({
                type: GET_APPLICANTS,
                payload: res.data.data,
            })
            );
        };
        export const closeVac = (id) => dispatch => {
            axios.put(`http://localhost:5000/api/vacancy/apply/closeVacancy/${id}`)
            .then(res =>
                dispatch({
                    type: CLOSE_APP,
                    payload: res.data.msg,
                })
                );
            };
    
            export const acceptVac = (id) => dispatch => {
                axios.put(`http://localhost:5000/api/vacancy/apply/${id}`)
                .then(res =>
                    dispatch({
                        type: ACCEPT_APP,
                        payload: res.data.msg,
                    })
                    );
                };
    