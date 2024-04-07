import BasicCard from "./Javascript";
import Python from "./Python";
import NavBar from "./Navbar";
import LeftNav from "./LeftNav";
import NodeCard from "./NodeCard";
import JestCard from "./JestCard";
import HTMLCSS from "./HTMLCSS";
import PyTest from "./PyTest";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main>
      <Link to="/"></Link>

      <section className="Home-text">
 I am a professional Javascript and react developer who graduated from 
Northcoders Bootcamp. I have great skills in coding Frontend projects 
as well as backend. I have great knowledge and experience of programming
using React. This Website was programmed using React only. Please 
feel free to browse my website. 
      </section>
    </main>
  );
};
