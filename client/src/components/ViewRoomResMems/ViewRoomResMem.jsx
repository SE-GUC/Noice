import React, { Component } from 'react'
import {withStyles, Grid, Typography,Button}  from '@material-ui/core'
import Rooms from './RoomResCards'
import CloseIcon from '@material-ui/icons/Close'

//{Redux}
import {getReservationsForRoom,deleteRoomRes} from '../../actions/viewReservationsFromLocView/resActions'
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//  
class ViewRoomResMem extends Component {
  constructor(props){
    super(props)
  if(props.id){
      console.log("The id in the props is: "+ this.props.id)
  }else{
    console.log("No ID was sent, using the dummy data! Please send ID in the props")
  }
    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleDelButton = this.handleDelButton.bind(this);
    this.state = {
      id:props.id,
      reservations:[
          {
              state: 'REQUESTED',
              startDate: '01-01-2019 04:55',
              endDate: '01-01-2019 05:55',
              reserver: 'Mohamed Ibrahim',
          },
          {
            state: 'ACCEPTED',
            startDate: '01-01-2019 06:55',
            endDate: '01-01-2019 07:55',
            reserver: 'Mohamed Ibrahim',
        },
        {
            state: 'REJECTED',
            startDate: '01-01-2019 08:55',
            endDate: '01-01-2019 09:55',
            reserver: 'Mohamed Ibrahim',
        }
      ]
  }   
  }
  handleEditButton=(startDate)=>{
    const D = new Date(startDate)
    const startDateInt = D.getTime()
    console.log("The date is: "+ startDateInt)
    console.log("you wanted to edit the reservation with startDate: "+ startDate)
    this.props.history.push("/member/view/updateRoomRes/"+startDateInt)
  }
  handleDelButton=(startDate)=>{
    console.log("you wanted to delete the reservation with startDate: "+ startDate)
    var body = new Object({
      startDate:startDate
    })
    this.props.deleteRoomRes(this.state.id,body)
    this.props.getReservationsForRoom(this.state.id)
  }
  handleGoBackBtn = () =>{
    if(this.props.history){
      this.props.history.goBack()
    }else{
      console.log("The module does not support the go back button.")
    }
  }
   render() {
     
    return (
        <Grid container style={{flexGrow:1}}>
          {/* The gird of title and close button */}
          <Grid item container direction="row">
          <Typography style={{fontWeight:'bold',margin:'auto',marginTop:'1.5%',marginBottom:'1.5%'}} variant="h2"> Room Reservations</Typography>
          <Button onClick={this.handleGoBackBtn}>
            <CloseIcon/>  
          </Button>
          </Grid>

          <Rooms handleDelButton ={this.handleDelButton} handleEditButton={this.handleEditButton} reservations={(this.props.reservations)?(this.props.reservations):(this.state.reservations)}/>
        </Grid>
        
    )
  }
  componentDidMount(){
    console.log('Mounted');
    // {Redux}
    this.props.getReservationsForRoom(this.state.id)
    //
  }
}

const styles = theme =>{

}
//{Redux} 
ViewRoomResMem.propTypes ={
  getReservationsForRoom: PropTypes.func.isRequired,
  reservations: PropTypes.array.isRequired
};

const mapStateToProps = state =>({
  reservations: state.roomResLoc.reservations
})
//
export default connect(mapStateToProps,{getReservationsForRoom,deleteRoomRes})(withStyles(styles)(ViewRoomResMem)) 