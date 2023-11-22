import "./App.css";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <div className="App">
        <h1>Hooks</h1>
        <BrowserRouter>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">Sobre</NavLink>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
