import React, { Component } from 'react';
import {connect} from 'react-redux';
//import from bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//validation
import PropTypes from 'prop-types'
//importing actions
import {viewAdmins} from '../../actions/adminActionsFolder/adminActions'

class ViewDeleteAdmin extends Component {
  componentWillMount(){
      this.props.viewAdmins();
   }  
  
  
  
  
  render() {
   const admins = this.props.adminRed.map(admin => (
       <div key={admin.id}>
       <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="data:image/png;base64,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" />
        <Card.Body>
        <Card.Title>{admin.firstName}</Card.Title>
         <Card.Text>
          {
          admin.lastName
           }
          </Card.Text>
  </Card.Body>
</Card>;
       </div>
   ));
   
    return (
      <div>
     <h1>all the good admins</h1>
      {admins}
      </div>
    )
  }
}

//validations
ViewDeleteAdmin.propTypes ={
  viewAdmins: PropTypes.func.isRequired,
  admins:PropTypes.array.isRequired

}

//maping the input to the state
const mapStateToProps = state =>({
  adminRed : state.adminRed.admins
})


export default  connect(mapStateToProps,{viewAdmins})(ViewDeleteAdmin)