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
export default function Project2() {
  return (
    <Card className='card' sx={{ maxWidth: 275 }}>
      <CardContent className='python-card'>
        <Typography variant="h5" component="div">
        Python and Typescript
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Munchify
        </Typography>
        <Typography variant="body2">
        At Munchify, we make that simple. You can create
        and share "platelists" of your favourite restaurants.
          <br />
        </Typography>
        <Typography variant="body2">
          <br />
        </Typography>

      </CardContent>
    </Card>
  );
}