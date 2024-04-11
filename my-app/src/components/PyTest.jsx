import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
export default function PyTest() {
  return (
    <Card className="card" sx={{ maxWidth: 275 }}>
      <CardContent className="python-card">
        <Typography variant="h5" component="div">
          PyTest
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Intermediate
        </Typography>
        <Typography variant="body2">
          Uses Pytest to conduct tests for Python.
          <br />
        </Typography>
        <Typography variant="body2">
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
