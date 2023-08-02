import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';

export default function MeMediaCard() {
  return (
    <Card sx={{width:"200px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Gaurav Singh
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"space-between"}}>
        <IconButton><EditIcon/></IconButton>
        <Button variant="outlined"  size="small" sx={{color:"Purple",fontWeight:"bold"}}>Logout</Button>
      </CardActions>
    </Card>
  );
}