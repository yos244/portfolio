import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Main />
        </header>
      </div>
    </Router>
  );
}

export default App;
