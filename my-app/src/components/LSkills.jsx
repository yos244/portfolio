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


export const LSkills = () => {
  return (
    <main>
      <Link to="/LSKill"></Link>
      <section className="card-section">
          <NodeCard />
          <BasicCard /> 
        <Python />
        <JestCard />
        <HTMLCSS />
        <PyTest />
      </section>
    </main>
  );
};
