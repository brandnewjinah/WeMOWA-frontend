import React from "react";

//import styles and assets
import styled from "styled-components";
import "./ProductDetail.scss";

const Elements = () => {
  return (
    <Wrapper>
      <Container>
        <Image>
          <img
            src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw76fdeeb1/images/PDP-features/Detail-TSA--Original-Trunk-XL-Silver.png"
            alt=""
          />
        </Image>
        <Detail>
          <Title>
            <h4>Key Elements</h4>
            <h1>Engineered for travel</h1>
          </Title>
          <div className="keyDetails">
            <div className="keyTitle flexSpaceBetween">
              <i className="fas fa-lock"></i>
              <span>TSA-Approved Locks</span>
              <i className="fas fa-minus"></i>
            </div>
            <ul>
              <li>
                Each of our suitcases features TSA-approved locks that can be
                opened by security during airline baggage checks without causing
                any damage.
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
        </Detail>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f7f5f4;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1360px;
  display: flex;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  margin: 4em 0;

  h1 {
    font-size: 2rem;
    font-weight: 300;
    margin: 1em 0;
  }

  h4 {
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.1875rem;
  }
`;

const Image = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  padding-right: 5em;
`;
const Detail = styled.div`
  width: 50%;
  padding: 4em 0 0;
`;

export default Elements;
