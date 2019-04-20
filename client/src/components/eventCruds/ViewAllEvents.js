import React, {Component} from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';

const Event = props => {console.log(props.event); return(
    <tr>
        <td>{props.event.Name}</td>
        <td>{props.event.Owner}</td>
        <td>{props.event.Type}</td>
        <td>{props.event.Location}</td>
        <td>{props.event.startDate}</td>
        <td>{props.event.endDate}</td>
        <td>{props.event.Description}</td>
        <td>{props.event.tags}</td>
    </tr>
)}

export default class ViewAllEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {events: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/events')
            .then(response => {
                this.setState({events: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    // componentDidUpdate() {
    //     axios.get('http://localhost:4000/todos/')
    //     .then(response => {
    //         this.setState({todos: response.data});
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })   
    // }

    Events() {
        return this.state.events.map(function(currentEvent, i) {
            return <Event event={currentEvent} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Events</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Owner</th>
                            <th>Type</th>
                            <th>Location</th>
                            <th>StartDate</th>
                            <th>EndDate</th>
                            <th>Description</th>
                            <th>Tags</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.Events() }
                    </tbody>
                </table>
            </div>
        )
    }
}