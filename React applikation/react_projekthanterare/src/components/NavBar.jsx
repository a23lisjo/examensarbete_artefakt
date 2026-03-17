import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbutton">Hem</Link>
      <Link to="/projekt" className="navbutton">Projekt</Link>

    </nav>
  );
}
export default Navbar;