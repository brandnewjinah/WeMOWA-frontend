import React from "react";

//import styles and assets
import styled from "styled-components";

const OrderItem = (props) => {
  const totalPrice = () => {
    const total = props.data.price * props.data.qty;
    return total;
  };

  return (
    <Container>
      <Image>
        <img src={props.data.images[0].img_url} alt="" />
      </Image>
      <Detail>
        <h6>{props.data.collection}</h6>
        <h5>{props.data.name}</h5>
        <h6>{props.data.color}</h6>
        <Flex>
          <div>{props.data.qty}</div>
          <div>{totalPrice()}</div>
        </Flex>
      </Detail>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #eeeeee;
  padding: 1em 0;

  &:last-child {
    border-bottom: none;
  }
`;

const Image = styled.div`
  width: 100%;
  max-width: 128px;
  background-color: #f7f5f4;

  img {
    width: 100%;
  }
`;

const Detail = styled.div`
  width: 80%;
  margin-left: 1em;

  h6 {
    font-weight: normal;
    font-size: 12px;
    text-transform: uppercase;
  }

  h4 {
    margin: 0.5em 0;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0;
`;

export default OrderItem;
