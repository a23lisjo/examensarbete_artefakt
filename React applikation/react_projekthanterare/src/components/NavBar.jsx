import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" class="navbutton">Hem</Link>
      <Link to="/projekt" class="navbutton">Projekt</Link>

    </nav>
  );
}
export default Navbar;