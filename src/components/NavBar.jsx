import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">SneakerZone</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Sneakers">Sneakers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Running">Running</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Lifestyle">Lifestyle</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Carrito 🛒</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
