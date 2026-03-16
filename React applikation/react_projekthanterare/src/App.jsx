import Navbar from "./componentes/navbar";
import Hem from "./pages/Hem/Hem";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hem />} />
        <Route path="/projekt" element={<Projekt />} />
      </Routes>
    </>
  );
}

export default App;