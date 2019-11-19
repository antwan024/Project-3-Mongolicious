import React from "react";
// import "./styles.css";

const Nav = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper white ">
          <a href="/" className="brand-logo center black-text">
            Best Life 
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <a href="/">
                <i className="material-icons black-text">Home</i>
              </a>
            </li>
            <li>
              <a href="/Tasks" className="black-text">
                <i className="material-icons black-text">Tasks</i>
              </a>
            </li>
            <li>
              <a href="/Points">
                <i className="material-icons black-text">Points</i>
              </a>
            </li>
          </ul>
          <ul id="nav-mobile" className="right">
            <li>
              <a class="waves-effect waves-light btn-small black">Login</a>
            </li>
            <li>
              <a class="waves-effect waves-light btn-small black">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
