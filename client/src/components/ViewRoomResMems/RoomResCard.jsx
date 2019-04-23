import React from 'react'
import {Paper, withStyles, Grid, Typography, Button, IconButton} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import LikeIcon from '@material-ui/icons/ThumbUp'
import DisLikeIcon from '@material-ui/icons/ThumbDown'
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red'
const RoomRes =({classes,roomState,startDate,endDate,reserver,handleEditButton, handleAccButton, handleRejButton, handleDelButton})=>{
    return (
        <Paper className={classes.paperStyle}>
            {/* The big group container */}
            <Grid container direction="column" justify="flex-start" style={{flexGrow:1}}>
              {/* The view room and close container*/}
              <Grid item xs container alignItems="flex-start" justify="center" direction="row">
                     {/* The "View room reservation" container */}
                    <Grid style={{flexGrow:1}}item> 
                      {/* The "View room reservation" */}
                      <Typography className = {classes.titleStyle} variant="h4">Room reservation at: {(startDate)?(startDate):("<StartDate>")}</Typography>
                    </Grid>
                      {/* The delete button container */}
                    {(handleEditButton)?(
                      <Grid item>
                      {/* The delete button */}
                        <IconButton onClick={()=>(handleEditButton)?(handleEditButton(startDate)):(console.log("No handleBackButton was passed"))} className={classes.button} aria-label="Exit">
                           <EditIcon />
                        </IconButton>
                      </Grid>
                    ):(null)}
              </Grid>
              {/* The room reservation data container*/}
              <Grid item xs container justify="space-evenly" spacing={8} className={classes.roomResDataContStyle} alignItems="flex-start" direction="column">
                {/* The state and <state> container*/}
                <Grid item xs container alignItems="flex-start" justify="center" direction="row">
                      {/* The state container */}
                      <Grid style={{flexGrow:1}}item> 
                        {/* The state */}
                        <Typography className={classes.resTitleStyle} variant="h5">State:</Typography>
                      </Grid>
                        {/* The <state> container */}
                      <Grid item>
                        {/* The <state> */}
                        <Typography variant="h5">{(roomState)?(roomState):("No room state for this reservation was sent !")}</Typography>
                      </Grid>
                </Grid>
                {/* The startDate and <startDate> container*/}
                <Grid item xs container alignItems="flex-start" justify="center" direction="row">
                      {/* The startDate container */}
                      <Grid style={{flexGrow:1}}item> 
                        {/* The startDate */}
                        <Typography className={classes.resTitleStyle} variant="h5">Start Date:</Typography>
                      </Grid>
                        {/* The <startDate> container */}
                      <Grid item>
                        {/* The <startDate> */}
                        <Typography variant="h5">{(startDate)?(startDate):("No room Start Date for this reservation was sent !")}</Typography>
                      </Grid>
                </Grid>
                {/* The endDate and <endDate> container*/}
                < Grid item xs container alignItems="flex-start" justify="center" direction="row">
                      {/* The endDate container */}
                      <Grid style={{flexGrow:1}}item> 
                        {/* The endDate */}
                        <Typography className={classes.resTitleStyle} variant="h5">End Date:</Typography>
                      </Grid>
                        {/* The <endDate> container */}
                      <Grid item>
                        {/* The <endDate> */}
                        <Typography variant="h5">{(endDate)?(endDate):("No room End Date for this reservation was sent !")}</Typography>
                      </Grid>
                </Grid>
               {(reserver)?(
                  <Grid item xs container alignItems="flex-start" justify="center" direction="row">
                    {/* The reserver container */}
                    <Grid style={{flexGrow:1}}item> 
                      {/* The endDate */}
                      <Typography className={classes.resTitleStyle} variant="h5">Reserver: </Typography>
                    </Grid>
                      {/* The <reserver> container */}
                    <Grid item>
                      {/* The <reserver> */}
                      <Typography variant="h5">{(reserver)?(reserver):("No reserver for this reservation was sent !")}</Typography>
                    </Grid>
                  </Grid>
                ):(null)}
              </Grid>
              {/* The controllers container*/}
              <Grid item xs className ={classes.controllersContStyle} container direction="row" justify="flex-end" alignItems="flex-end" alignContent="flex-end">
                {/* Theme provider for the buttons*/}
                 {/* The Accept container*/}
                {(handleAccButton)?(
                  <Grid item >
                    <Button  variant="contained" className = {classes.greenBtnStyle} onClick={()=>handleAccButton(startDate)}>Accept
                      <LikeIcon className={classes.rightIcon}/>
                    </Button>
                  </Grid>
                ):(null)}
                 {/* The Delete container*/}
                 {(handleDelButton)?(
                  <Grid item >
                    <Button  variant="contained" className = {classes.redBtnStyle} onClick={()=>handleDelButton(startDate)}>Delete
                      <DeleteIcon className={classes.rightIcon}/>
                    </Button>
                  </Grid>
                ):(null)}
                 {/* The Delete container*/}
                 {(handleRejButton)?(
                  <Grid item >
                    <Button  variant="contained" className = {classes.redBtnStyle} onClick={()=>handleRejButton(startDate)}>Reject
                      <DisLikeIcon className={classes.rightIcon}/>
                    </Button>
                  </Grid>
                ):(null)}
              </Grid>
            </Grid>
        </Paper>
    )
  }
const styles = theme =>({
  paperStyle:{
  ...theme.mixins.gutters(),
  padding: theme.spacing.unit * 2, 
    minWidth:'50%',
    elevate24:true,
    rounded: false
  },
  titleStyle:{
    
    height:'10%',
    maxHeight:'10%',
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
  },
  resTitleStyle:{
    fontWeight:"bold",
    marginLeft: theme.spacing.unit*4,
  },
  roomResDataContStyle:{
    marginTop: theme.spacing.unit *4
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  controllersContStyle:{
    marginTop: theme.spacing.unit *4,
    margintBottom: theme.spacing.unit *4
  },
  greenBtnStyle: {
    margin: theme.spacing.unit,
    color: theme.palette.getContrastText(green[700]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
},
redBtnStyle: {
  margin: theme.spacing.unit,
  color: theme.palette.getContrastText(red[700]),
  backgroundColor: red[700],
  '&:hover': {
    backgroundColor: red[900],
  },
},
})
export default withStyles(styles)(RoomRes)