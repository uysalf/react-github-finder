import React, { useState } from "react";
import PropTypes from "prop-types";
import { Outlet, NavLink, Link } from "react-router-dom";
const Navbar = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <>
      {/* fixed-top */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning sticky-top   px-4">
        {/* <a href="#" className="navbar-brand">
          <i className={props.icon}></i>
          {props.title}
        </a> */}
        <div className="">
          <Link to="/" className="navbar-brand">
            <i className={props.icon}></i>
            {props.title}
          </Link>
        </div>

        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarsExample09"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active" : "passive"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active" : "passive"
                }
                to="/user/12"
              >
                User Details
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active" : "passive"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active" : "passive"
                }
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active" : "passive"
                }
                to="/products/12?orderby=price"
              >
                Products Detail
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active" : "passive"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active" : "passive"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active" : "passive"
                }
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active" : "passive"
                }
                to="/products/12?orderby=price"
              >
                Products Detail
              </NavLink>
            </li>
          </ul>
        </div> */}
      </nav>
      <div className="">
        <Outlet />
      </div>
    </>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Github",
  icon: "fab fa-github fa-lg",
};
export default Navbar;
