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
        Northcoders Bootcamp. I have great skills in coding Frontend projects as
        well as backend. I have great knowledge and experience of programming
        using React. This Website was programmed using React only. Please feel
        free to browse my website.
        <br></br>
      </section>
      <body className="image-box">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          alt="JS"
          width="70"
          height= "70"
          className="images"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1280px-Python.svg.png"
          alt="Python"
          width="70"
          height= "70"
          className="images"
        />
         <img
          src="https://avatars.githubusercontent.com/u/103283236?s=200&v=4"
          alt="Jest"
          width="70"
          height= "70"
          className="images"
        />
           <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Pytest_logo.svg/1200px-Pytest_logo.svg.png"
          alt="PyTest"
          width="70"
          height= "70"
          className="images"
        />
         <img
          src= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
          alt="PyTest"
          width="70"
          height= "70"
          className="images"
        /> 
      </body>
    </main>
  );
};
