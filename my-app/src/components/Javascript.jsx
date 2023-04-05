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
export default function BasicCard() {
  return (
    <Card className='card-box' sx={{ maxWidth: 275 }}>
      <CardContent className='basic-card'>
        <Typography variant="h5" component="div">
        Javascript
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Advanced
        </Typography>
        <Typography variant="body2">
        Proficient coding using Javascript
          <br />
        </Typography>
        <Typography variant="body2">
        Testing: Jest
          <br />
        </Typography>

      </CardContent>
    </Card>
  );
}