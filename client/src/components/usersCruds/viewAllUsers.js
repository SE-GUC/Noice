import React, {Component} from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';

const User = props => {console.log(props.event); return(
    <tr>
        <td>{props.user.email}</td>
        <td>{props.user.firstName}</td>
        <td>{props.user.middleName}</td>
        <td>{props.user.lastName}</td>
        <td>{props.user.birthDate}</td>
        <td>{props.user.gender}</td>
        <td>{props.user.address}</td>
        <td>{props.user.phoneNumber}</td>
        <td>{props.user.typeOfUser}</td>
        <td>{props.user.companyName}</td>
        <td>{props.user.companyLocation}</td>
        <td>{props.user.field}</td>
        <td>{props.user.partners}</td>
        <td>{props.user.events}</td>
        <td>{props.user.projects}</td>
        <td>{props.user.vacancies}</td>
    </tr>
)}

export default class viewAllUsers extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/users')
            .then(response => {
                this.setState({users: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    Users() {
        return this.state.users.map(function(currentUser, i) {
            return <User user={currentUser} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Users</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>email</th>
                            <th>firstName</th>
                            <th>middleName</th>
                            <th>lastName</th>
                            <th>birthDate</th>
                            <th>gender</th>
                            <th>address</th>
                            <th>phoneNumber</th>
                            <th>typeOfUser</th>
                            <th>companyName</th>
                            <th>companyLocation</th>
                            <th>field</th>
                            <th>partners</th>
                            <th>events</th>
                            <th>projects</th>
                            <th>vacancies</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.Users() }
                    </tbody>
                </table>
            </div>
        )
    }
}