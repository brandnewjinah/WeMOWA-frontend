import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import MainWrapper from "./MainWrapper";
import Footer from "../../components/Footer/Footer";
import "./Main.scss";
class Main extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch("./data/taek2data.json")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.products }));
  }

  render() {
    
    return (
      <div className="Main">
        <Header />
        <Nav />
        {/* css 슬라이더 적용 위치*/}
        <div className="main-slider">
          <div className="main-slider-title">
            <p className="title1">EXPLORE COLLECTIONS</p>
            <p className="title2">
              The perfect suitcase, 120 years in the making
            </p>
          </div>
          <div className="main-wrapper">
            {this.state.data.map((product) => {
              return (
                <MainWrapper
                  collection={product.collection}
                  img_url={product.img_url}
                  title={product.title}
                  colorPalette={product.colorPalette}
                />
              );
            })}
          </div>
        </div>
        <div className="main-container">
          <div className="container1">
            <div className="conainer1-item1">
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dwd0278c4b/images/mozaic_vertical/W19_Polycarbonate.jpg"
                alt="container1 이미지 1"
              ></img>
              <div className="conainer1-text1">
                <p>POLYCARBONATE</p>
                <h2>Lightweight and long-lasting</h2>
              </div>
            </div>
            <div className="container1-item2">
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dwc0afe0d9/images/large/51500005_1.png"
                alt="container1 이미지 2"
              ></img>
              <div className="conainer1-text2">
                <p>OUR SELECTION FOR YOU</p>
                <h2>Wheels Set Accessories</h2>
              </div>
            </div>
          </div>
          <div className="container2">
            <img src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dwa1133107/images/mozaic_horizontal/W1_Horizontal@2x.jpg"></img>
            <p>The RIMOWA sticker collection</p>
          </div>
          <div className="container3">
            <div className="container3-item1">
              <img src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw138146d1/images/mozaic_vertical/W19_Aluminium.jpg"></img>
              <div className="container3-text1">
                <p>ALUMINUM</p>
                <h2>Unbeatable strength</h2>
              </div>
            </div>
            <div className="container3-item2">
              <img src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw1838254b/images/mozaic_vertical/W19_GlacierBerryV2.jpg"></img>
              <div className="container3-text2">
                <p>LUGGAGE</p>
                <h2>Discover Berry & Glacier</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="main-textContainer">
          <h3>Shall we show you everything?</h3>
          <a href="#">SEE ALL LUGGAGE</a>
        </div>
        <div className="main-storyContainer">
          <div className="storyInfo">
            <p className="storyInfo-text1">STORIES</p>
            <p className="storyInfo-text2">Our latest news and views</p>
          </div>
          {/* 슬라이더 컴포넌트 위치*/}
          <div
            style={{ backgroundColor: "blue", width: "100%", height: "400px" }}
          ></div>
          <a className="storyBtn" href="#">
            DISCOVER MORE STORIES
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
