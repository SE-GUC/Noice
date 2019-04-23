import React from 'react';
import '../../App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Switches from './switches';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import {viewAllRooms, deleteRoom ,createRoom} from '../../actions/roomActionFolder/roomActions';
import {connect} from 'react-redux';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
  root: {
    width: '80%',
    position: 'absolute', left: '50%',
    transform: 'translate(-50%)',
  },
   fab: {
    margin: theme.spacing.unit,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 225,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  card: {
    minWidth: 800,
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
},
demo: {
  backgroundColor: theme.palette.background.paper,
},
title: {
  margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
},
});

class SimpleCard extends React.Component {
  componentDidMount(){
    console.log("The id is: "+ this.props.id) 
    this.props.viewAllRooms(this.props.id)
  }
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClose2 = this.handleClose2.bind(this);
    

/******CHANGE INITIAL ATTRIBUTES HERE ************/
    this.state = { 
      ID: '',
      capacity:'',
      checkedA: false,
      open: false,
      open2: false,
      open3: false,
    }
  }
  handleChangeChecked = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  onSubmit(e){
     e.preventDefault();
     this.setState({
      ID: '',
      capacity:'',
      checkedA: false,
      open: false,
      open2: false,
      open3: false,
              })
   }
   handleClick = (id,capacity,Availability) => {
    if(this.state.capacity>50 ||this.state.capacity<0 ){
      this.setState({ open: true });
     }
    else{
      console.log("the id 2 is "+id+" "+capacity);
      const body = new Object({
        capacity:capacity,
        isAvailable:Availability,
        locationId: id,
        reservations:[],
      });
      this.props.createRoom(id,body);
      this.setState({ open3: true  });
    }
  };
  handleClick2 = (id) => {
      this.setState({ open2: true });
      this.props.deleteRoom(id);
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleClose2 = () => {
    this.setState({ open2: false  });
  };
  handleClose3 = () => {
    this.setState({ open3: false  });
  };
  render () {
  const { classes } = this.props;

  return (
    <div className={classes.root}>
    <font size="30">ROOMS</font><br/><br/>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Create Room</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
    <tab></tab><tab></tab><tab></tab><tab></tab>
    <Card ALIGN="CENTER" className={classes.card} onSubmit={this.onSubmit}>
      <CardContent>
        <Typography variant="h5" component="h2" >

        <form ALIGN="CENTER" className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="ID"
            className={classes.textField}
            value={this.state.ID}
            onChange={this.handleChange('ID')}
            margin="normal"
            variant="outlined"
          /><tab></tab><tab></tab>
          <TextField
            id="outlined-name"
            label="Capacity"
            type="number"
            min="1" 
            max="50"
            className={classes.textField}
            value={this.state.capacity}
            onChange={this.handleChange('capacity')}
            margin="normal"
            variant="outlined"
          />
          </form><br />
          Day Not Available:<tab></tab>
          <TextField
          id="datetime-local"
          label="Start Date"
          type="datetime-local"

          defaultValue="2017-05-24T10:30"
          className={classes.textField}
          InputLabelProps={{
          shrink: true,
           }}
          />
          <tab></tab>
          <TextField
          id="datetime-local"
          label="End Date"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          className={classes.textField}
          InputLabelProps={{
          shrink: true,
           }}
          />
          <br /><br/>
          <div>
          <center>Not Available<Switch checked={this.state.checkedA} onChange={this.handleChange('checkedA')} value={this.state.checkedA}/>Available</center>
          </div>
        </Typography>
        <Fab color="primary" variant='extended' ALIGN="CENTER" onClick={()=>{this.handleClick(this.state.ID,this.state.capacity,this.state.checkedA)}} className={classes.button}>
        Create
      </Fab>
      <Snackbar
                  open={this.state.open3}
                  onClose={this.handleClose3}
                  TransitionComponent={Fade}
                  ContentProps={{
                    'aria-describedby': 'message-id',
                  }}
                  message={<span id="message-id">Room has been created successfully</span>}
                />
      <Snackbar
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Fade}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Capacity must be between 1 and 50</span>}
        />
      </CardContent>
    </Card>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>View Rooms</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid item xs={12} md={6}>
        <div className={classes.demo}>
                {this.props.rooms.map(value =>{
                  return(
                    <div key={value._id}>
                    <ListItem>
                    <ListItemText
                      primary={<Typography> Availability : {value.isAvailable.toString()}<br/>ID : {value._id}<br/>Capacity : {value.capacity}<br/>Location ID : {value.locationId}</Typography>}
                    />
                      <IconButton aria-label="Delete" color="secondary" onClick={()=>{this.handleClick2(value._id)}}>
                        <DeleteIcon />
                      </IconButton>
                      <IconButton color="primary" aria-label="Update" href='/UpdateRoom'>
                        <EditIcon/>
                      </IconButton>
                      <Fab variant="extended" aria-label="viewRes" className={classes.fab} href='/location/view/roomreservations'>
                         View Reservation
                      </Fab>
                  </ListItem>  
                      
                    </div>
                  )
                })}
                <Snackbar
                  open={this.state.open2}
                  onClose={this.handleClose2}
                  TransitionComponent={Fade}
                  ContentProps={{
                    'aria-describedby': 'message-id',
                  }}
                  message={<span id="message-id">Room has been deleted successfully</span>}
                />
            </div>
            </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
  rooms: PropTypes.array.isRequired,
};

const mapStateToProps = state =>({
  rooms: state.viewRooms.rooms
})

export default connect(mapStateToProps,{viewAllRooms,deleteRoom,createRoom})(withStyles(styles)(SimpleCard));