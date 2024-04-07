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
export default function HTMLCSS () {
  return (
    <Card className='card' sx={{ maxWidth: 275 }}>
      <CardContent className='python-card'>
        <Typography variant="h5" component="div">
        HTML + CSS
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Advanced
        </Typography>
        <Typography variant="body2">
        Proficient at writing and debugging HTML and CSS styling
        </Typography>

      </CardContent>
    </Card>
  );
}