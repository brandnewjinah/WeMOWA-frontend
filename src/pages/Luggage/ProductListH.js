import React, { useEffect, useState } from "react";

//import components
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import DropdownLugg from "../../components/LugProduct/DropdownLugg";
import CheckPrice from "../../components/LugProduct/CheckPrice";
import CheckCollect from "../../components/LugProduct/CheckCollect";
import CabinProduct from "../../components/LugProduct/CabinProduct";
import EditionProduct from "../../components/LugProduct/EditionProduct";

//import styles and assets
import styled from "styled-components";
import "./ProductList.scss";

const ProductListH = () => {
  const [data, setData] = useState([]);
  const [fixColor, setFixColor] = useState("");

  useEffect(() => {
    fetch("/data/productList.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const convertImg = (obj) => {
    for (let i = 0; i < obj.series_color.length; i++) {
      if (obj.series_color[i].name.includes(fixColor)) {
        return i;
      }
    }
    return 0;
  };

  return (
    <Wrapper>
      <Header />
      <Nav />
      <Container>
        <main className="ListMain">
          <div className="ListTop">
            <div className="TopFilter">
              <div className="FilterToggle">
                <button className="ToggleButton">FILTER</button>
                {/* {this.state.isToggleOn ? (
                  <div className="FilterDropdown">
                    <div className="DropdownBox">
                      <div className="ColorFilter">
                        <span>Color</span>
                        {this.state.ata.map((luc) => {
                          return (
                            <DropdownLugg
                              lugColor={luc.lugColor}
                              colorName={luc.colorName}
                              selectedHandler={this.selectedHandler}
                            />
                          );
                        })}
                      </div>
                      <div className="PriceFilter">
                        <span>PRICE</span>
                        <CheckPrice pricedHandler={this.pricedHandler} />
                      </div>
                      <div className="CollectionFilter">
                        <span>PRODUCT COLLENTION</span>
                        <CheckCollect />
                      </div>
                    </div>
                    <div className="DropdownSub">
                      <div className="CancleBox">
                        <button className="CancelBtn">CANCEL</button>
                      </div>
                      <div className="ApplyBox">
                        <button className="RESETBtn">RESET</button>
                        <button
                          onClick={this.fetchColor}
                          onMouseEnter={this.fetchPrice}
                          className="APPLYBtn"
                        >
                          APPLY
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null} */}
              </div>
              <div className="TopSeller">
                <div className="Seller">
                  <p className="SortBy">SORT BY</p>
                  {/* {this.state.isSortOn ? (
                    <div className="FilterDropdown">
                      <div className="DropdownBox">
                        <div className="CollectionFilter">
                          <span>PRODUCT COLLENTION</span>
                          <CheckCollect />
                        </div>
                      </div>
                    </div>
                  ) : null} */}
                </div>
              </div>
            </div>
          </div>
          <div className="ListContainer">
            <ul className="ListCabin">
              <CabinProduct />
              {data.map((product) => {
                return (
                  <EditionProduct
                    collect={product.collection}
                    proNumber={product.product_number}
                    name={product.name}
                    fixName={product.series_color}
                    price={product.price}
                    img={product.series_color[convertImg(product)]}
                    youngColor={fixColor}
                    color={product.series_color.slice(0, 4)}
                  />
                );
              })}
            </ul>
          </div>
        </main>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Container = styled.div``;

export default ProductListH;
