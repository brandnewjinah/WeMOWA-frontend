import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavAccessories.scss";

class NavAccessories extends Component {
  render() {
    return (
      <div className="NavAccessories">
        <ul>
          <li className="iphone-cases">
            <span>IPHONE CASES</span>
            <div>
              <Link className="iphone-case1" to="#">
                <div>
                  <img
                    src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-storefront-final/default/dw96d98f4a/images/16/megamenu/aluminium-iphone-case.png"
                    alt="Aluminium iPhone Case"
                  />
                </div>
                <p>Aluminium iPhone Case</p>
              </Link>
              <Link className="iphone-case2" to="#">
                <div>
                  <img
                    src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-storefront-final/default/dw2de52d66/images/16/megamenu/iphone_case_black.png"
                    alt="Leather iPhone Case"
                  />
                </div>
                <p>Leather iPhone Case</p>
              </Link>
              <Link className="iphone-case3" to="#">
                <div>
                  <img
                    src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-storefront-final/default/dw543dfe60/images/16/megamenu/Iridescent_megamenu.png"
                    alt="Iridescent iPhone Case"
                  />
                </div>
                <p>Iridescent iPhone Case</p>
              </Link>
              <Link className="iphone-case4" to="#">
                <div>
                  <img
                    src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-storefront-final/default/dw791bd878/images/16/megamenu/sticker_iphone_case.png"
                    alt="Sticker iPhone Case"
                  />
                </div>
                <p>Sticker iPhone Case</p>
              </Link>
            </div>
            <Link className="allCases" to="">
              All iPhone cases
            </Link>
          </li>
          <li className="stickers">
            <span>STICKERS</span>
            <div className="stickers-items">
              <Link className="sticker-1" to="#">
                <div>
                  <img
                    src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-storefront-final/default/dw07e48ed1/images/32/megamenu/single_sticker.png"
                    alt="Stickers"
                  />
                </div>
                <p>Stickers</p>
              </Link>
              <Link className="sticker-2" to="#">
                <div>
                  <img
                    src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-storefront-final/default/dw6b5046e8/images/32/megamenu/hongkong.png"
                    alt="City Stickers"
                  />
                </div>
                <p>City Stickers</p>
              </Link>
              <Link className="sticker-3" to="#">
                <div>
                  <img
                    src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-storefront-final/default/dw79f8cd43/images/32/megamenu/sticker_set.png"
                    alt="Sticker Set"
                  />
                </div>
                <p>Sticker Set</p>
              </Link>
              <a className="allStickers">All stickers</a>
            </div>
          </li>
          <li className="extras">
            <span>EXTARS</span>
            <div className="extras-items">
              <Link className="extra-1" to="#">
                <div>
                  <img
                    src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-storefront-final/default/dwb66b0ba9/images/32/megamenu/wheels_megamenu.png"
                    alt="Wheels"
                  />
                </div>
                <p>Wheels</p>
              </Link>
              <Link className="extra-2" to="#">
                <div>
                  <img
                    src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-storefront-final/default/dw75966bcc/images/32/megamenu/tags_megamenu.png"
                    alt="Luggage Tags"
                  />
                </div>
                <p>Luggage Tags</p>
              </Link>
              <Link className="extra-3" to="#">
                <div>
                  <img
                    src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-storefront-final/default/dwc18cbbc4/images/32/megamenu/belts.jpg"
                    alt="Luggage Belts"
                  />
                </div>
                <p>Luggage Belts</p>
              </Link>
              <Link className="extra-4" to="#">
                <div>
                  <img
                    src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-storefront-final/default/dw1b575bcc/images/32/megamenu/charms_A_blue.png"
                    alt="Luggage Charms"
                  />
                </div>
                <p>Luggage Charms</p>
              </Link>
              <Link className="allExtras" to="">
                All extras
              </Link>
            </div>
          </li>
          <li className="Limied-edition">
            <span>LIMITED EDITION</span>
            <div>
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw89129996/images/260/megamenu/GLCO@2x.jpg"
                alt="LIMITED EDITION"
              />
            </div>
            <Link to="#">RIMOWA x Garrett Leight</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavAccessories;
