import {React, useState} from "react";
import "./index.css";
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
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                  Website
                </Link>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item active">
                      <Link class="nav-link" aria-current="page" to="/">
                        Home
                      </Link>
                    </li>
                    <li class="nav-item active">
                      <Link class="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li class="nav-item dropdown">
                      <Link
                        class="nav-link dropdown-toggle"
                        to="/extras"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Extras
                      </Link>
                      <ul class="dropdown-menu">
                        <li>
                          <Link class="dropdown-item" to="/about">
                            About
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/contact">
                            Contact
                          </Link>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/service">
                            Service
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <form className="d-flex" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <Link class="btn btn-outline-primary mx-2" to="/login">
                        Login
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="btn btn-primary" to="/signup">
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
