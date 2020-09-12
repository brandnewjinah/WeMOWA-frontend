import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavServices.scss";

class NavServices extends Component {
  render() {
    return (
      <div className="NavServices">
        <ul>
          <li className="services-list1">
            <span>
              <Link to="http://localhost:3000/locator">STORE LOCATOR</Link>
            </span>
            <img
              src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw3024992a/images/260/megamenu/Store.jpg"
              alt="Store.jpg"
            ></img>
            <Link to="">Find the nearest store</Link>
          </li>
          <li className="services-list2">
            <span>RIMOWA WARRANTY</span>
            <img
              src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw1edb0b45/images/260/megamenu/Warranty.jpg"
              alt="Warranty.jpg"
            ></img>
            <Link to="">Register your RIMOWA</Link>
          </li>
          <li className="services-list3">
            <span>REPAIR SERVICE</span>
            <img
              src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw445cd3ed/images/260/megamenu/Repair.jpg"
              alt="Repair.jpg"
            ></img>
            <Link to="">Repair your RIMOWA</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavServices;
