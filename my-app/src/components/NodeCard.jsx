import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function NodeCard() {
  return (
    <Card className='card' sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Node
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Advanced
        </Typography>
        <Typography variant="body2">
          Familiar with node environment
          <br />
        </Typography>
        <Typography variant="body2">
          Testing: Pytest
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
