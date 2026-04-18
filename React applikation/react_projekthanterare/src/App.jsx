import Navbar from "./components/navbar";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import "./App.css"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="templatePage">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
    </div>
  );
}

export default App;