import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Switches from './switches';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import '../../App.css';
import Fab from '@material-ui/core/Fab';
import {updateRoom} from '../../actions/roomActionFolder/roomActions';
import {connect} from 'react-redux';
import Switch from '@material-ui/core/Switch';


const styles = theme => ({
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
    button: {
      margin: theme.spacing.unit,
    },
  });
  

class UpdateRoom extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClose2 = this.handleClose2.bind(this);

/******CHANGE INITIAL ATTRIBUTES HERE ************/
    this.state = { 
      ID: '',
      capacity:'',
      checkedA: false,
      open: false,
      open2:false,
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
        open2:false,
                  })
       }
       handleClick = (id,Capacity,Availability) => {
         if(this.state.capacity>50 ||this.state.capacity<0 ){
        this.setState({ open: true });
       }
      else{
        const body = {
          capacity: Capacity,
          isAvailable: Availability,
          locationId: "5cb134e04828eb67908abf08",
          reservations:[],
        };
        this.props.updateRoom(id,body);
        this.setState({ open2: true  });
      }
         }
      handleClose = () => {
        this.setState({ open: false });
      };
      handleClose2 = () => {
        this.setState({ open2: false  });
      };

      render () {
  const { classes } = this.props;

  return (
    <Card className={classes.card} onSubmit={this.onSubmit}>
    <CardContent>
      <Typography variant="h5" component="h2" ALIGN="LEFT">
      <Typography variant="h4" ALIGN="CENTER">Update Room</Typography>
      <form ALIGN="CENTER" className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="ID"
        className={classes.textField}
        value={this.state.ID}
        onChange={this.handleChange('ID')}
        margin="normal"
        variant="outlined"
      /><tab></tab>
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
      <Typography ALIGN="CENTER" >
      <Fab color="primary" variant='extended' ALIGN="CENTER" onClick={()=>{this.handleClick(this.state.ID,this.state.capacity,this.state.checkedA)}} className={classes.button}>
        UPDATE
      </Fab>
      <Snackbar
          open={this.state.open2}
          onClose={this.handleClose2}
          TransitionComponent={Fade}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Room has been updated successfully</span>}
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
      </Typography>
    </CardContent>
  </Card>
  );
}
}

UpdateRoom.propTypes = {
  classes: PropTypes.object.isRequired,
  rooms: PropTypes.array.isRequired,
};

const mapStateToProps = state =>({
  rooms: state.viewRooms.rooms
})

export default connect(mapStateToProps,{updateRoom})(withStyles(styles)(UpdateRoom));