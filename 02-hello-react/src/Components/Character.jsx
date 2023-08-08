import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardContent } from '@mui/material';

function Character({characters}) {
  return (
    


    <div>
      <Card sx={{maxWidth:345}}>
    <img src={characters.image} alt={characters.name} ></img>
    
    <CardContent>
      <Typography gutterBottom variant='h5' component="div">
    <b>{characters.name}</b></Typography></CardContent>
    </Card>
    </div>
   
  )
}
export default Character