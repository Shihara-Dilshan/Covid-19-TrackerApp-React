import React, { Component } from "react";

import "materialize-css/dist/css/materialize.min.css";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="nav-wrapper teal">
            <a href="#!" className="brand-logo hide-on-med-only">
              COVID-19 Tracker
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
