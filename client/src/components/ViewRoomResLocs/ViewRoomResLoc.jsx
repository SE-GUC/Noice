import React, { Component } from 'react'
import {withStyles, Grid, Typography,Button}  from '@material-ui/core'
import Rooms from './RoomResCards'
import CloseIcon from '@material-ui/icons/Close'
//{Redux}
import {getReservationsForRoom,acceptRoomRes,rejectRoomRes} from '../../actions/viewReservationsFromLocView/resActions'
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//  
class ViewRoomResLoc extends Component {
  //{Redux}
  constructor(props){
    super(props)
  if(props.id){
      console.log("The id in the props is: "+ this.props.id)
  }else{
    console.log("No ID was sent, using the dummy data! Please send ID in the props")
  }
    this.handleAccButton = this.handleAccButton.bind(this);
    this.handleRejButton = this.handleRejButton.bind(this);
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
  //

  handleAccButton=(startDate)=>{
    //Send accept action
    const body = new Object({
      startDate:startDate
    })
    this.props.acceptRoomRes(this.state.id,body)
    console.log("you accepted the reservation with startDate: "+ startDate)
  }
  handleRejButton=(startDate)=>{
   //Send accept action
   const body = new Object({
    startDate:startDate
  })
  this.props.rejectRoomRes(this.state.id,body)
    console.log("you rejected the reservation with startDate: "+ startDate)
  }
  handleGoBackBtn = ()=>{
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
          {/*{Redux}*/}
          <Rooms handleRejButton ={this.handleRejButton} handleAccButton={this.handleAccButton} reservations={(this.props.reservations)?(this.props.reservations):(this.state.reservations)}/>
          {/*//*/}
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
ViewRoomResLoc.propTypes ={
  getReservationsForRoom: PropTypes.func.isRequired,
  reservations: PropTypes.array.isRequired
};

const mapStateToProps = state =>({
  reservations: state.roomResLoc.reservations
})
//

export default connect(mapStateToProps,{getReservationsForRoom,acceptRoomRes,rejectRoomRes})(withStyles(styles)(ViewRoomResLoc)) 