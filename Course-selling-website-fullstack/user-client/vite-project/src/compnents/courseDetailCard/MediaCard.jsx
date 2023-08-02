import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{width:"200px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://source.unsplash.com/random"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Price  ₹1000
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{color:"purple"}}>Purchase</Button>
      </CardActions>
    </Card>
  );
}