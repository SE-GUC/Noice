import React from 'react'
import Card from './RoomResCard'
import { Grid } from '@material-ui/core';
const RoomResCards=({reservations, handleEditButton, handleAccButton, handleRejButton, handleDelButton})=> {
  return (
      
      <Grid style={{marginLeft:'25%',maxWidth:'50%',flexGrow:1}} container direction = "column" >
        {(reservations)?(reservations.map(element=>{
            return (
               <Grid key={element.startDate} style={{width:'100%',flexGrow:1}}>
               <p></p>
               <Card roomState={element.state} startDate={element.startDate} endDate={element.endDate} reserver={element.reserver} handleEditButton={handleEditButton} handleAccButton ={handleAccButton} handleRejButton={handleRejButton} handleDelButton={handleDelButton}/>
               <p></p>
               </Grid>
            )
        })):("No room reservations was sent !")}
      </Grid>
  )
}

export default RoomResCards
