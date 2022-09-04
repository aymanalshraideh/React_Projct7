import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <React.Fragment>
      <div className="loader-backdrop">
        <div className="loader">
          <i className="ion-heart-outline"></i>
        </div>
      </div>

      <header className="header-1">
        <div className="topbar">
          <div className="container-lg">
            <div className="row no-gutters">
              <div className="col-md-12">
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg sticky-nav">
          <div className="container">
            <a className="navbar-br/and" href="/ndex-hospital-classNameic.html">
              <img src="images/logo.svg" alt="" className="logo" />
            </a>

            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#main-navigation"
            >
              <span className="navbar-toggler-icon">
                <span className="one"></span>
                <span className="two"></span>
                <span className="three"></span>
              </span>
            </button>

            <div className="navbar-collapse collapse" id="main-navigation">
              <ul className="navbar-nav">
                <li className="nav-item has-menu">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item has-menu">
                  <a href="/book-an-appointment">Appointments</a>
                </li>
                <li className="nav-item has-menu">
                  <a href="/profile">Profile</a>
                </li>
                <li className="nav-item has-menu">
                  <a href="/About">About</a>
                </li>
                <li className="nav-item has-menu">
                  <a href="/contact">Contact</a>
                </li>
               

                {localStorage.getItem("isloggedIn") == "1" && (
                  <li className="nav-item has-menu">
                    <a
                      href="/Logout"
                      onClick={() => {
                        localStorage.removeItem("isloggedIn");
                      }}
                      >
                      Logout
                    </a>
                  </li>
                )}
                {localStorage.getItem("isloggedIn") != "1" && (
                  <li className="nav-item has-menu">
                    <a href="/login">Login</a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
}

export default Navbar;
