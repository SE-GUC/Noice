import React, {Component} from 'react';
import axios from 'axios';

export default class UpdatePartner extends Component {

    constructor(props) {
        super(props);

        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onChangeCompanyLocation = this.onChangeCompanyLocation.bind(this);
        this.onChangeField = this.onChangeField.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            CompanyName: '',
            CompanyLocation: '',
            Field: '',
        }
    }


    onChangeCompanyName(e) {
        this.setState({
            CompanyName: e.target.value
        });
    }

    onChangeCompanyLocation(e) {
        this.setState({
            CompanyLocation: e.target.value
        });
    }

    onChangeField(e) {
        this.setState({
            Field: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const obj = {
            companyName: this.state.CompanyName,
            companyLocation: this.state.CompanyLocation,
            field: this.state.Field,
        };
        axios.put('http://localhost:3000/api/partners/5c93e8b88c10dc71806b8132', obj)
            .then(res => console.log(res.data));

    }

    render() {
        return (
            <div>
                <h3>Update partner</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>CompanyName: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.CompanyName}
                                onChange={this.onChangeCompanyName}
                                />
                    </div>
                    <div className="form-group">
                        <label>CompanyLocation: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.CompanyLocation}
                                onChange={this.onChangeCompanyLocation}
                                />
                    </div>
                    <div className="form-group">
                        <label>Field: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Field}
                                onChange={this.onChangeField}
                                />
                    </div>
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Update Partner" className="btn btn-primary" />
                        </div>
                </form>
            </div>
        )
    }
}