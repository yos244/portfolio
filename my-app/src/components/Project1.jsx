import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
export default function Project1() {
  return (
    <Card className='card' sx={{ maxWidth: 275 }}>
      <CardContent className='python-card'>
        <Typography variant="h5" component="div">
        React
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        NC Games Reviews
        </Typography>
        <Typography variant="body2">
        A website to display, sort, like, dislike, and organise different reviews for games.
          <br />
        </Typography>
        <Typography variant="body2">
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}