import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl'
 class Home extends Component {
  render() {
    return (
      <div style={{width:'100%', margin: 'auto'}}>
        <Grid className='home-grid'>
         <Cell col={12}>
           <img 
           src="../images/lirtenLogo.jpeg"
           alt="fix your internet"
           className="homepage Image"
           />
           <div className="banner-text">
            <h1>Welcome to Lirten Hub</h1>
            <hr/>
            <p>HOME PARAGRAPH HERE IF NEEDED </p>
           </div>
         </Cell>
        </Grid>
      </div>
    )
  }
}
export default Home