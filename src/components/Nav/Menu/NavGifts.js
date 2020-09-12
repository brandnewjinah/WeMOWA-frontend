import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavGifts.scss";

class NavGifts extends Component {
  render() {
    return (
      <div className="NavGifts">
        <ul>
          <li className="gift-list1">
            <span className="GiftGuides-title">GIFT GUIDES</span>
            <div>
              <p>Travel Accessories</p>
              <p>Dior and RIMOWA</p>
              <Link to="">All gifts</Link>
            </div>
          </li>
          <li className="gift-list2">
            <span>BUSINESS TRIP READY</span>
            <div>
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw67345e13/images/260/megamenu/3-B.png"
                alt="3-B.png"
              />
            </div>
            <Link to="">Professional luggage to work with</Link>
          </li>
          <li className="gift-list3">
            <span>TRAVELLER FAVOURITES</span>
            <div>
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw28feb7df/images/260/megamenu/MustHave.jpg"
                alt="MustHave.jpg"
              />
            </div>
            <Link to="">Our most popualr products</Link>
          </li>
          <li className="gift-list4">
            <span>RIMOWA UNIQUE</span>
            <div>
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw5d3fc4e5/images/260/megamenu/RimowaUnique.jpg"
                alt="RimowaUnique.jpg"
              />
            </div>
            <Link to="">Make your own RIMOWA Classic</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavGifts;
