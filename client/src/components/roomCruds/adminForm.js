import React from 'react';
import '../../App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        width: '80%',
        position: 'absolute', left: '50%',
        transform: 'translate(-50%)',
    },
    fab: {
        margin: theme.spacing.unit,
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  });

class Admin extends React.Component {

    state = {
      location:'',
      member: ''
    };

    handleChange = name => event => {
        this.setState({
        [name]: event.target.value,
        });
    };

    onSubmit(e){
        e.preventDefault();
        this.setState({
            location:'',
            member: ''
         })
    }

    render () {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography variant="h5" ALIGN="CENTER" component="h2" >
                    <br/>
                    <br/>
                    <font size="10">ADMIN</font><tab></tab>
                    <br/>
                    <br/>
                    <form className={classes.container} noValidate autoComplete="off">
                        <font size="10">Member :</font><tab></tab>
                        <TextField
                                id="member"
                                label="member"
                                className={classes.textField}
                                value={this.state.member}
                                onChange={this.handleChange('member')}
                                margin="normal"
                                variant="outlined"
                            />
                        <Fab variant="extended" aria-label="member" className={classes.fab} href="/member/view/roomreservations">
                                VIEW
                        </Fab>
                    </form>
                    <br/>
                    <form className={classes.container} noValidate autoComplete="off">
                        <font size="10">Location :</font><tab></tab>
                        <TextField
                                id="location"
                                label="location"
                                className={classes.textField}
                                value={this.state.loaction}
                                onChange={this.handleChange('location')}
                                margin="normal"
                                variant="outlined"
                            />
                        <Fab variant="extended" aria-label="location" className={classes.fab} href='/locationRoom'>
                                VIEW
                        </Fab>
                    </form>
                </Typography>
            </div>
        );
    }
}

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Admin);