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
import Project1 from "./Project1";
import Project2 from "./Project2";

export const Background = () => {
  return (
    <main>
    <div className="Home-text">
      I come from a math teaching background with experience in teaching maths
      to adults. I beleive that I am a person that has a logical approach to
      problem solving. I decided to do a career switch to Front-end development
      and I loved React. I belive that I am a fast leaerner. Also, I am good 
      with people since I have been teaching for a while.  
      <br></br>
    </div>
    <div className="emoji">
    😊
    </div>
    </main>

  );
};
