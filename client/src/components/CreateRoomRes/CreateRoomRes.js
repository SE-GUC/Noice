import React, { Component } from 'react'
import {Paper, withStyles, Grid, Typography, Button, IconButton} from '@material-ui/core'
import CrossIcon from '@material-ui/icons/Close'
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment'
import { MuiPickersUtilsProvider, TimePicker, DatePicker} from 'material-ui-pickers';

//{Redux}
import {createRoomRes} from '../../actions/viewReservationsFromLocView/resActions'
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types'; 
// 

class CreateRoomRes extends Component {
    constructor(props){
      super(props)
    if(props.id){
        console.log("The id in the props is: "+ this.props.id)
    }else{
      console.log("No ID was sent, using the dummy data! Please send ID in the props")
    }
      this.handleStartDateChange = this.handleStartDateChange.bind(this);
      this.handleEndDateChange = this.handleEndDateChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        id:this.props.id,
        reserverId:this.props.reserverId,
        state:"REQUESTED",
        startDate: new Date(),
        endDate: new Date()
    }   
    }
    componentDidMount(){
      console.log('Mounted');
    }
    handleGoBackButton = () =>{
      (this.props.history)?(this.props.history.goBack()):(console.log("No Go back was found"))
    }
    handleStartDateChange = (date) => {
        this.setState({ 

            startDate: date });
            console.log(this.state.startDate)
      };
      handleEndDateChange = (date) => {
        this.setState({ 
            endDate: date });
            console.log(this.state.endDate)
      };
    handleSubmit = () =>{
      var body = this.state
      const id = body.id
      delete body.id
      body.startDate = moment(this.state.startDate).format('DD-MM-YYYY hh:mm')
      body.endDate = moment(this.state.endDate).format('DD-MM-YYYY hh:mm')
      console.log(body)
      this.props.createRoomRes(id,body)
      // axios request
    }  
  render() {
    const {classes} = this.props
    return (
        <div>
            <Paper className={classes.paperStyle}>
            {/* The big container */}
            <Grid container  direction="column" alignItems="stretch" className ={classes.grid}>
                  {/* The "CREATE ROOM RES TEXT" and delete button container*/}
                  <Grid container direction="row" >
                     {/* The "CREATE ROOM RES TEXT" container */}
                    <Grid style={{flexGrow:1}}item> 
                      {/* The "CREATE ROOM RES TEXT" */}
                      <Typography className = {classes.typStyle} variant="headline">Create Room Reservations</Typography>
                    </Grid>
                      {/* The delete button container */}
                    <Grid item>
                    {/* The delete button */}
                      <IconButton onClick={this.handleGoBackButton} className={classes.button} aria-label="Exit">
                         <CrossIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                  {/* The contaier of the start and end dates  */}
                  <Grid container style={{flexGrow:1}} direction="column" justify="center">
                        {/* The Start Date Container */}
                        <Grid style={{margin:"20px"}}container alignItems="center" direction="row" justify="center">
                            {/* The Start Date Typography container */}
                            <Grid item xs>
                                {/* The Start Date Typography  */}
                                <Typography variant="headline">Start Date</Typography>
                            </Grid>
                            {/* The End Date Typography container */}
                            <Grid  item xs container direction="row" alignItems="stretch"> {/* */}
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                      <DatePicker
                                        margin="normal"
                                        label="Start Date"
                                        value={this.state.startDate}
                                        onChange={this.handleStartDateChange}
                                      />
                                      <TimePicker
                                        margin="normal"
                                        label="Time picker"
                                        value={this.state.startDate}
                                        onChange={this.handleStartDateChange}
                                      />
                                  </MuiPickersUtilsProvider>
                            </Grid>
                        </Grid> 
                         {/* The End Date Container */}
                        <Grid  style={{margin:"20px"}} container alignItems="center" direction="row" justify="center" >
                            {/* The End Date Container */}
                            <Grid item xs={6}>
                                <Typography variant="headline">End Date</Typography>
                            </Grid>
                            <Grid item xs container direction="row" alignItems="stretch"> {/* */}
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DatePicker
                                      margin="normal"
                                      label="Start Date"
                                      value={this.state.endDate}
                                      onChange={this.handleEndDateChange}
                                    />
                                    <TimePicker
                                      margin="normal"
                                      label="Time picker"
                                      value={this.state.endDate}
                                      onChange={this.handleEndDateChange}
                                    />
                                  </MuiPickersUtilsProvider>
                            </Grid>
                        </Grid>  
                  </Grid>
                  {/* The create room res button  */}
                  <Button style={{margin:'auto'}} onClick={this.handleSubmit}variant="contained" color="primary" className={classes.button}>Create room reservation</Button>        
            </Grid>
            </Paper>
        </div>
    )
  }
}

const styles = theme =>({
    paperStyle:{
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 2,
      
      maxWidth: '70%',
      minWidth:'50%',
      maxHeight: '70%',
      position:'absolute',
      left: '50%',
      top:'50%',
      elevate24:true,
      transform:"translate(-50%,-50%)",
      rounded: false
    },
    typStyle:{
        fontWeight:"bold",
        height:'10%',
        maxHeight:'10%',
        marginTop: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 2,

    },
    grid: {
        width: '100%',
        height:'100%',
      },
      button: {
        margin: theme.spacing.unit,
      },

  });
  CreateRoomRes.propTypes ={
    createRoomRes: PropTypes.func.isRequired
  };

  export default connect(null,{createRoomRes})(withStyles(styles)(CreateRoomRes))