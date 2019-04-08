import React, {Component} from 'react';
import axios from 'axios';

export default class EditTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            ID: '',
        }
    }

    onChangeID(e) {
        console.log("You typed in the ID textbox")
        this.setState({
            ID: e.target.value
        });
       
    }

    
    onSubmit(e) {
        e.preventDefault();
        console.log("You pressed submit")
        const idToDelete = this.state.ID
        axios.delete(`http://localhost:5000/api/partners/${idToDelete}`)
            .then(res => console.log(res.data));

            

    }

    render() {
        return (
            <div>
                <h3>Delete a Partner</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>ID of the partner you want to delete: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.ID}
                                onChange={(evt) => this.onChangeID(evt)}
                                />
                    </div>
             
                    
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Delete Partner" className="btn btn-primary" />
                        </div>
                </form>
            </div>
        )
    }

}