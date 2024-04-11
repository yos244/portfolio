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

export const Video = () => {
  return (
    <div className="video">
        In this video, I was making a short presentation about the potential <br></br>
        future abilities of AI and how life can be if AI becomes more <br></br>
        intelligent and self-aware, Please skip to 14:00.
        <br></br>
      <br></br>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/88-FcEY1zoc?si=ZPBrJjaKZebUYR8D"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    
      
    </div>
  );
};
