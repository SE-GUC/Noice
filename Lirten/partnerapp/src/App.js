import React, { Component } from 'react';
import Partners from './components/Partners';
import PartnersDelete from './components/PartnerDelete'

/******* Delete babel-jest and jest from node modules for this to work and install cors *****/

class App extends Component {
  render() {
    return (
      <div className="App">
        <Partners />
        <PartnersDelete />
      </div>
    );
  }
}

export default App;
