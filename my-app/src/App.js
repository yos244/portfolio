import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { LSkills } from "./components/LSkills";
import LeftNav from "./components/LeftNav";
import Navbar from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Video } from "./components/Video";
import { Background } from "./components/Background";
function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <Header />
          <div className="nav-container">
            <LeftNav />
            <Navbar />
          </div>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LSkills" element={<LSkills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/video" element={<Video />} />
        <Route path="/background" element={<Background />} />
      </Routes>
    </div>
  );
}
export default App;
