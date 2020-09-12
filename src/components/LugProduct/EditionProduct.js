import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./EditionProduct.scss";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class EditionProduct extends Component {
  constructor() {
    super();
    this.state = {
      isMouseOver: true,
      isToggleOn: true,
      heartOver: false,
      product: "",
      colors: "",
      i: 0,
    };
  }
  // componentDidMount = (prevProps) => {
  //   if(prevProps.location.pathname !== this.props.location.pathname)
  //   fetch(`http://10.58.2.57:8000/product/?product_name=${this.props.pathname}`)
  //   .then((response) => response.json())
  //   .then((response) => this.setState({data: response.data}));
  // }
  handleMouseOver = (idx) => {
    this.setState({
      isMouseOver: false,
      i: idx,
    });
  };
  handleMouseOut = () => {
    this.setState({
      isMouseOver: true,
      i: 0,
    });
  };
  handleColorImage = (co) => {
    this.setState({
      colors: co,
      isMouseOver: false,
    });
  };
  boundColorImage = (co) => {
    this.setState({
      colors: co.product_img2,
      isMouseOver: false,
    });
  };
  convertProduct = () => {
    // fetch(`http://10.58.2.57:8000/product/1/${this.props.match.params.proNumber}`)
    // .then((response) => response.json())
    // .then((response) => this.setState({data: response.data}));
    // this.setState({
    // })
  };
  render() {
    const { name, price, collect, img, color } = this.props;
    // console.log("img", img)
    // console.log("convertnumber", this.props.img);
    return (
      <li className="CabinLimited">
        <div className="LimitedThumb">
          <div className="LimitedBody">
            <a href=" " className="ProductLink">
              <div
                className="ProductImage"
                onClick={() => {
                  this.props.history.push(
                    "/product?product_number=" + this.props.proNumber
                  );
                }}
              >
                {/* {
                                    this.props.img && this.props.img.map((im, index) => {
                                      return (
                                        <img 
                                          src= {this.state.isMouseOver ? im.product_img1 : this.state.colors}
                                          onMouseEnter={() => this.handleColorImage(3)} onMouseLeave={this.handleMouseOut}
                                          className="LimitedImage" 
                                          alt=""/>
                                      );
                                    })
                                  } */}
                <img
                  src={
                    this.state.isMouseOver
                      ? img.product_img1
                      : this.state.colors
                  }
                  onMouseEnter={() => this.boundColorImage(img)}
                  onMouseLeave={this.handleMouseOut}
                  className="LimitedImage"
                  alt=""
                />
              </div>
              <div className="ProductCat">{collect}</div>
              <div className="ProductRyme">{name}</div>
            </a>
            <div className="ProductPrice">
              <span>{price} €</span>
            </div>
            <div className="ProductPromo"></div>
          </div>
          <div className="LimitedWish">
            {this.state.isMouseOver ? null : <FontAwesomeIcon icon={faHeart} />}
          </div>
          <div className="ProductSwatch">
            <ul className="SwatchList">
              {color &&
                color.map((co, index) => {
                  return (
                    <li
                      className="SwatchBlack"
                      onMouseEnter={() =>
                        this.handleColorImage(co.product_img1)
                      }
                      onMouseLeave={this.handleMouseOut}
                    >
                      <a href=" ">
                        <img
                          src={co.color_url}
                          className="SwatchImage"
                          alt=""
                        />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="ProductBadge">
            <div className="IconTag"></div>
            <div className="TagName">LIMITED EDITION</div>
          </div>
        </div>
      </li>
    );
  }
}
export default withRouter(EditionProduct);
