import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
         <div className="container-fluid nav_bg">
            <div className="row"> 
                <div className="col-14 mx-auto">

                <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Website</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item active">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item active">
          <Link class="nav-link active" to="/about">About</Link>
        </li>
        <li class="nav-item dropdown">
          <option class="nav-link active dropdown-toggle"  placeholder="Extras" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Extras
          </option>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/about">About</Link></li>
            <li><Link class="dropdown-item" to="/contact">Contact</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="/service">Service</Link></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
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
