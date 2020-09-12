import React, { Component } from "react";
import Carousel from "nuka-carousel";
import { Link } from "react-router-dom";
import OrigTrunkPF from "../../images/Orig_Trunk_PF.jpg";
import OrigTrunkPS from "../../images/Orig_Trunk_PS.jpg";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      test: [
        { id: 1, name: "one", size: "55x40x23 cm" },
        { id: 2, name: "two", size: "25x40x23 cm" },
        { id: 3, name: "three", size: "45x40x23 cm" },
      ],
    };
  }

  componentDidMount() {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((res) => this.setState({ products: res.products }));
  }

  render() {
    return (
      <div className="ProductDetail">
        <div className="pdpTop">
          <div className="productImg">
            <Carousel
              className="imgCarousel"
              renderBottomCenterControls={({ currentSlide }) => (
                <div>{null}</div>
              )}
              renderCenterLeftControls={({ previousSlide }) => (
                <button className="productSliderBtn" onClick={previousSlide}>
                  <i className="fa fa-arrow-left" />
                </button>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <button className="productSliderBtn" onClick={nextSlide}>
                  <i className="fa fa-arrow-right" />
                </button>
              )}
            >
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dwd17c0765/images/large/92585004_1.png"
                alt=""
              />
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dw8613f24b/images/large/92585004_2.png"
                alt=""
              />
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dwe5e28c87/images/large/92585004_3.png"
                alt=""
              />
            </Carousel>
            <div className="productLabel">New</div>
          </div>
          <div className="productDetail center">
            <div className="pdHeader">
              <span className="upper">Original</span>
              <h1>Trunk XL</h1>
            </div>
            <div className="pdPrice">
              <span>1.530,00 €</span>
            </div>
            {/* <div className="pdSize">Size Dropdown</div> */}
            <div className="pdAddToCart">
              <button>Purchase</button>
            </div>
            <div className="pdAvail">
              <span className="upper">Limited Stock</span>
            </div>
            <div className="pdOptions flexJustifyCenter">
              <Link to="">
                <div className="pdWisilist">Add to Wishlist</div>
              </Link>
              <Link to="">
                <div className="pdFindStore">Find in store</div>
              </Link>
            </div>
            <div className="pdText">
              <p>
                The unmistakable RIMOWA Original aluminium suitcase with its
                distinctive grooves is regarded as one of the most iconic
                luggage designs of all time. Made from high-end anodised
                aluminium, the RIMOWA Original Trunk XL in silver is our largest
                suitcase yet. An oversized edition inspired by our original
                trunks, this extra large four wheel suitcase is the same height
                as the RIMOWA Original Trunk Plus and offers 25% more space for
                less than 6% of additional weight. Suited to open-ended voyages
                of four weeks or more. Includes a complimentary leather luggage
                tag and sticker set.
              </p>
            </div>
            <Link to="">
              <div className="pdAirline">See airline compatibility</div>
            </Link>
            <div className="pdColors flexJustifyCenter">
              {this.state.products.map((c) => (
                <div>{c.name}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="pdpBottom">
          <div className="pdpSpecs">
            <div className="specHeader center">
              <span className="upper">Specifications</span>
              <h3>Refined to the very last detail</h3>
            </div>
            <div className="specDetail flex">
              <div className="specImg">
                <div className="specUnit upper">
                  <span className="metric">Metric</span>
                  <span className="imperial">Imperial</span>
                </div>
                <div className="specWire flexEnd">
                  <div className="wireLeft flex">
                    <div className="specHeight flexColumnCenter">
                      <div className="height">
                        <div className="center">Height</div>
                        <div className="center">80CM</div>
                      </div>
                    </div>
                    <div>
                      <img src={OrigTrunkPF} alt="" />
                      <div className="specWidth flexJustifyCenter">
                        <div className="width">
                          <span>Width</span>
                          <span>43,5 CM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wireRight">
                    <img src={OrigTrunkPS} alt="" />
                    <div className="specDepth flexJustifyCenter">
                      <div className="depth">
                        <span>Depth</span>
                        <span>43,5 CM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="specDetails"></div>
            </div>
            <div className="specPN upper center">Product Number : 92585004</div>
          </div>
          <div className="pdpKey flex">
            <div className="keyImg">img</div>
            <div className="keyDetails">details</div>
          </div>
          <div className="pdpRecommend">pdpRecommend</div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
