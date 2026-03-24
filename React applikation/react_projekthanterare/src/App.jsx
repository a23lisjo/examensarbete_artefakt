import Navbar from "./components/navbar";
import Hem from "./pages/Hem/Hem";
import Projekt from "./pages/Projekt/Projekt";
import "./App.css"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="templatePage">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Hem />} />
          <Route path="/projekt" element={<Projekt />} />
        </Routes>
    </div>
  );
}

export default App;