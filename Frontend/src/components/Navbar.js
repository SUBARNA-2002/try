import React from "react";

import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbars() {

  const tokenValue = JSON.parse(localStorage.getItem("token"));

  const Logout = () => {
    localStorage.removeItem("token");
    window.location = "./Login";
    // alert("logout successful")
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand text-black" href="/">
            <b>MyInsta</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" href="#">
                  HOME
                </Link>
              </li>

              <li className="nav-item">
                <Link to="./Posts" className="nav-link" href="#">
                  POSTS
                </Link>
              </li>

              <li className="nav-item">
                <Link to='./Contact' className="nav-link" href="#">
                  CONTACT
                </Link>
              </li>
              <li className="nav-item">
                <Link to='./About' className="nav-link" href="#">
                  ABOUT
                </Link>
              </li>
              
            </ul>
            <input
                style={{width:"30%"}}
                className="form-control text-center mx-2 "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            <form className="d-flex" role="search">
            
              {tokenValue ? (
              <>
                <Link to='./AddPost' className="btn btn-dark">Add Posts</Link>
                <button
                  className="btn btn-dark mx-1"
                  type="submit"
                  onClick={Logout}
                >
                  Logout
                </button>
                </>
              ) : (
                <>
                  <Link
                    to="./Login"
                    className="btn btn-dark mx-1"
                    type="submit"
                  >
                    Login
                  </Link>
                  <Link
                    to="./Register"
                    className="btn btn-outline-dark mx-1"
                    type="submit"
                  >
                    Signup
                  </Link>
                </>
              )}
            </form>
          </div>
        </div>
      </nav>

      
    </div>
  );
}

export default Navbars;
