import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">
            EZ Contact Book
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" exact to="/contacts/">
                  Contact Book
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" exact to="/users/">
                  User
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" exact to="/aboutus">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/contactus">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/*   <Link className="btn btn-outline-light" to="/users/add">
            Add Users
          </Link> */}
        </div>
      </nav>
    );
  }
}

export default Navbar;
