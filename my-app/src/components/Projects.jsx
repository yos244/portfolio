import BasicCard from "./Javascript";
import Python from "./Python";
import NavBar from "./Navbar";
import LeftNav from "./LeftNav";
import NodeCard from "./NodeCard";
import JestCard from "./JestCard";
import HTMLCSS from "./HTMLCSS";
import PyTest from "./PyTest";
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Project1 from "./Project1";
import Project2 from "./Project2";

export const Projects = () => {
  return (
    <main>
      <Link to="/Projects"></Link>
      <section className="card-section-projects">
         <Project1 />
         <Project2  /> 
      </section>
    </main>
  );
};
