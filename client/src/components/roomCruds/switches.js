import React from 'react';
import Switch from '@material-ui/core/Switch';

class Switches extends React.Component {
  state = {
    checkedA: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
        <Switch
          checked={this.state.checkedA}
          onChange={this.handleChange('checkedA')}
          value="checkedA"
        />
    );
  }
}

export default Switches;