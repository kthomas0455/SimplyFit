import React from "react";
import "./navSignedIn.css";
import { Link } from "react-router-dom";

// import "../../style.css"

const NavSignedIn = props => (
  <div>
    <nav id="navs" className="navbar navbar-expand-lg navbar-light bg-black">
    <img id="logo" src="cliet/logo/logo.png"> </img>
      <p className="navbar-brand" href="" />
      <button
        className="navbar-toggler bg-white"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href=""
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Programs
            </a>
            <div
              className="dropdown-menu text-white "
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link to={"/dailyTrainer"}>
                <p className="dropdown-item m-0">All Daily Trainers</p>
              </Link>
              <Link to={"/Selftrainer"}>
              <span className="dropdown-item m-0" href="">
                Self Trainer
                <p>(Bodybuilding/Powerlifting/Circuit Training)</p>
              </span>
              </Link>
           
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href=""
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Diet
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="">
                Recipes
              </a>
              <a className="dropdown-item" href="">
                Healthy Replacements
              </a>
              <a className="dropdown-item" href="">
                Supplement Recommendations
              </a>
            </div>
          </li>
          <li className="nav-item">
          <Link to={"/workoutTracker"}>
            <p id="simple3" className="nav-link m-0 text-white">
              Workout Tracker
            </p>
            </Link>
          </li>
          <li className="nav-item">
          <Link to={"/profile"}>
            <p id="simple" className="nav-link m-0">
              {`${props.name}'s profile`}
            </p>
            </Link>
          </li>
          <li>
          <Link to={"/"}>
            <p id="simple1" className="nav-link m-0" onClick={props.signOut}>
              Sign the f Out
            </p>
            </Link>
            </li>
          <li id="push">
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default NavSignedIn;
