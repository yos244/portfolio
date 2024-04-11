import BasicCard from "./Javascript";
import Python from "./Python";
import NavBar from "./Navbar";
import LeftNav from "./LeftNav";
import NodeCard from "./NodeCard";
import JestCard from "./JestCard";
import HTMLCSS from "./HTMLCSS";
import PyTest from "./PyTest";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

export const Contact = () => {
  return (
    <main>
      <Link to="/contact"></Link>
      <section className="card-section">
        <Card className="card-contact">
          <CardContent className="contact-card-content">
            <Typography variant="h5" component="div">
              Email
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              yos_24@hotmail.com
            </Typography>
            <Typography variant="h5">
              Linkedin
              <br />
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              https://www.linkedin.com/in/yousif-tulemat-771299115/
            </Typography>
            <Typography variant="h5">
              Github
              <br />
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              https://github.com/yos244
            </Typography>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};