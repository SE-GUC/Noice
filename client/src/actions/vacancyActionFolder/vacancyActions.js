import {GETVACANCY,GET_APPLICANTS,CLOSE_APP,ACCEPT_APP,CREATE_VACANCY,UPDATE_VACANCY,VIEW_VACANCY,VIEW_ALL_VACANCIES,DELETE_VACANCY} from './vacancyTypes';
import { DELETE_EVENT } from '../eventActionsFolder/EventTypes';

const axios = require('axios');
    export const  getVacancies = () => async dispatch =>{
        console.log('vacancy called')
        await axios.get('http://localhost:5000/api/vacancy/')
        .then(res => dispatch({
                type: GETVACANCY,
                payload: res.data.data
             }) 
             );
             
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

        export const createVacancy=  (body)=> async dispatch =>{
            await axios.post('http://localhost:5000/api/vacancy/',body)
            .then(data => dispatch({
                type: CREATE_VACANCY,
                payload: data
            }));
        
    };

    export const updateVacancy=  (body)=> async dispatch =>{
        await axios.put('http://localhost:5000/api/vacancy/',body)
        .then(data => dispatch({
            type: UPDATE_VACANCY,
            payload: data
        }));
    
    };

    export const deleteVacancy = (id) => dispatch => {
        axios.delete(`http://localhost:5000/api/vacancy/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_EVENT,
                payload: res.data.msg,
            })
            );
        };    

        export const viewVacancy = (id) => dispatch => {
            axios.get(`http://localhost:5000/api/vacancy/${id}`)
            .then(res =>
                dispatch({
                    type: VIEW_VACANCY,
                    payload: res.data.msg,
                })
                );
            };

            export const  viewAllVacancies = () => async dispatch =>{
                console.log('vacancy called')
                await axios.get('http://localhost:5000/api/vacancy/')
                .then(res => dispatch({
                        type: VIEW_ALL_VACANCIES,
                        payload: res.data.data
                     }) 
                     );
                     
                };