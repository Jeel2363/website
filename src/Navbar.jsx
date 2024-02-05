import {React, useState} from "react";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {

  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Redirect to the Search component with the search input as a query parameter
    navigate(`/search?q=${searchInput}`);
  };
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-14 mx-auto">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  Website
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                      <Link className="nav-link" aria-current="page" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="/extras"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Extras
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/about">
                            About
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/contact">
                            Contact
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/service">
                            Service
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <form className="d-flex" onSubmit={handleSearch}>
        <input
          className="form-control me-2 mb-2 mb-lg-0"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="btn btn-outline-success mb-2 mb-lg-0" type="submit">
          Search
        </button>
      </form>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="btn btn-outline-primary mx-2 mb-2 mb-lg-0" to="/login">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="btn btn-primary" to="/signup">
                        Signup
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
