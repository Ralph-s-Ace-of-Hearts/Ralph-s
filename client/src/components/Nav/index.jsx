import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        
        <ul>
          <li>
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>

          <li>
            <Link to="/login">Employee Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header>
      <h1>
        <Link to="/">
        <img src="\images\ralphsLogo.jpg" alt="Ralph's Logo" style={{ height: "80px" }} />
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      {Auth.loggedIn() && Auth.isAdmin() && (
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      )}
      </ul>
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
