import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "nuka-carousel";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import SizesDD from "./SizesDD";
import OrigTrunkPF from "../../images/Orig_Trunk_PF.jpg";
import OrigTrunkPS from "../../images/Orig_Trunk_PS.jpg";

//import styles and assets
import "./ProductDetail.scss";

class ProductDetail extends Component {
  state = {
    product: {},
  };

  // // API
  // componentDidMount() {
  //   fetch("http://10.58.4.117:8000/product?product_number=92585004", {
  //     method: "GET",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => this.setState({ product: res.data }));
  // }

  componentDidMount() {
    const token = localStorage.getItem("token");
    console.log(token);

    console.log("sd", this.props.location);

    fetch("http://3.34.135.207:8000/product" + this.props.location.search)
      .then((res) => res.json())
      // .then((res) => console.log("ris",res));
      .then((res) => this.setState({ product: res.data }));

    console.log("FDSfsdf");

    //fetch("/data/pd_data.json")
    //  .then((res) => res.json())
    //  .then((res) => this.setState({ product: res.product }));
  }

  // // Mock Data
  // componentDidMount() {
  //   fetch("/data/test.json")
  //     .then((res) => res.json())
  //     .then((res) => this.setState({ product: res.data }));
  // }

  handleWishlist = () => {
    this.setState((prev) => ({ wishlist: !prev.wishlist }));

    fetch("/data/test.json")
      .then((res) => res.json())
      .then((res) => this.setState({ product: res.data }));
  };

  handleWishlist = () => {
    // const token = localStorage.getItem("token");
    // fetch(
    //   "http://10.58.6.226:8000/account/wishlist?product_id=" +
    //     thisstate.product.product_id,
    //   {
    //     method: "POST",
    //     header: {
    //       "Content-type": "application/json",
    //       Authorization: token,
    //     },
    //   }
    // ).then((res) => console.log(res));

    this.setState({
      product: {
        ...this.state.product,
        wishlist: !this.state.product.wishlist,
      },
    });
  };

  sendDataToCart = () => {
    // const token = localStorage.getItem("token");
    // fetch("http://10.58.2.57:8000/order", {
    //   method: "POST",
    //   header: {
    //     "Content-type": "application/json",
    //     Authorization: token,
    //   },
    //   body: JSON.stringify({
    //     product_id: this.state.product.product_id,
    //     amount: 1,
    //     tag: "Red",
    //     tag_text: "ABC",
    //   }),
    // })
    //   .then((res) => res.json())
    //   //.then((res) => console.log(res));
    //   .then((res) => {
    //     console.log("response", res);
    //     if (res.status === 200) {
    //       alert("Item added to cart");
    //       this.props.history.push("/cart");
    //     } else {
    //       alert("Please log in first");
    //       this.props.history.push("/login");
    //     }
    //   });
    this.props.history.push("/cart");
  };

  render() {
    // const { product_id } = this.state.product;
    const { collection } = this.state.product;
    const { name } = this.state.product;
    const { price } = this.state.product;
    const { stock_status } = this.state.product;
    const { description } = this.state.product;
    const { images } = this.state.product;
    const { color_urls } = this.state.product;
    const { color_product_numbers } = this.state.product;
    const { wishlist } = this.state.product;

    return (
      <div className="ProductDetail">
        <Header />
        <Nav />
        <div className="pdpTop">
          <div className="productImg">
            <div className="pdTag">
              <div className="productLabel flex">
                <div className="pdDiamond"></div>
                <div className="pdTxtUpper">New</div>
              </div>
            </div>
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
              {images && images.map((c) => <img src={c.img_url} alt="" />)}
            </Carousel>
          </div>
          <div className="productDetail center">
            <div className="pdInfo">
              <div className="pdHeader">
                <span className="subHeader">{collection && collection}</span>
                <h1>{name && name}</h1>
              </div>
              <div className="pdPrice">
                <span>{`${price && price} €`}</span>
              </div>
            </div>

            <div className="pdSelectSize">
              <SizesDD products={this.state.product} />
            </div>
            <div className="pdAddToCart">
              <button onClick={this.sendDataToCart}>Purchase</button>
            </div>
            <div className="pdAvail">
              <span className="pdTxtUpper">{stock_status && stock_status}</span>
            </div>
            <div className="pdOptions flexJustifyCenter">
              <div
                className="pdWishlist flexCenter"
                onClick={this.handleWishlist}
              >
                <i
                  className={`${wishlist ? "fas fa-heart" : "far fa-heart"}`}
                ></i>
                <div className="pdML3 pdUnderline">Add to Wishlist</div>
              </div>

              <div className="pdStore flexCenter">
                <i className="fas fa-store"></i>
                <div className="pdML3 pdUnderline">Find in store</div>
              </div>
            </div>
            <div className="pdText">
              <p>{description && description}</p>
            </div>
            <div>
              {/* {color_urls && color_urls.map((c) => <img src={c} />)}   */}
              <img src={color_urls} alt="" />
            </div>
            {/* <div className="pdColors flexJustifyCenter">
              {this.state.product[0] &&
                this.state.product[0].color.map((color) => (
                  <div
                    className="pdML3 colorPalette"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
            </div> */}
          </div>
        </div>
        <div className="divider"></div>
        <div className="pdpBottom">
          <div className="pdpSpecs">
            <div className="sectionHeader center">
              <span className="subHeader">Specifications</span>
              <h1>Refined to the very last detail</h1>
            </div>
            <div className="specDetail flex">
              <div className="specImg">
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
              <div className="specDetails">
                <div className="specTitle">Specifications</div>
                <ul>
                  <li>WEIGHT: 4,3 KG</li>
                  <li>VOLUME: 35 L</li>
                </ul>
                <div className="specTitle">Materials</div>
                <ul>
                  <li>OUTSIDE : ALUMINIUM</li>
                  <li>INSIDE : POLYESTER / LEATHER</li>
                  <li>HANDLES : PLASTIC</li>
                  <li>WHEELS: HARD PLASTIC</li>
                </ul>
              </div>
            </div>
            <div className="specPN pdTxtUpper center">
              Product Number : {color_product_numbers && color_product_numbers}
            </div>
          </div>
          <div className="pdpKey flex">
            <div className="keyImg flexJustifyCenter">
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw76fdeeb1/images/PDP-features/Detail-TSA--Original-Trunk-XL-Silver.png"
                alt=""
              />
            </div>
            <div className="keyAccor">
              <div className="sectionHeader center">
                <span className="subHeader">Specifications</span>
                <h1>Engineered for travel</h1>
              </div>
              <div className="keyDetails">
                <div className="keyTitle flexSpaceBetween">
                  <i className="fas fa-lock"></i>
                  <span>TSA-Approved Locks</span>
                  <i className="fas fa-minus"></i>
                </div>
                <ul>
                  <li>
                    Each of our suitcases features TSA-approved locks that can
                    be opened by security during airline baggage checks without
                    causing any damage.
                  </li>
                </ul>
                <div className="keyTitle flexSpaceBetween">
                  <i className="fas fa-columns"></i>
                  <span>Flex Divider</span>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="keyTitle flexSpaceBetween">
                  <i className="fas fa-suitcase-rolling"></i>
                  <span>Multi Wheel System</span>
                  <i className="fas fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="pdpRecommend"></div>
          {/* <div dangerouslySetInnerHTML={{ __html: innerHTML }} /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(ProductDetail);
