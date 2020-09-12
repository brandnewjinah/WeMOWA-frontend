import React, { useEffect } from "react";

//import components
import OrderItem from "./OrderItem";

//import styles and assets
import styled from "styled-components";

//import redux
import { connect } from "react-redux";
import { GET_TOTAL } from "../../store/cart";

const OrderSummary = (props) => {
  useEffect(() => {
    props.dispatch({ type: GET_TOTAL });
  }, [props.items, props.dispatch]);
  return (
    <Container>
      <h2>Order Summary</h2>
      {props.items.map((item) => (
        <OrderItem key={item.id} data={item} />
      ))}

      <Total>
        <Flex>
          <h5>Subtotal</h5>
          <h5>{props.total}€</h5>
        </Flex>
        <Flex>
          <h5>Shipping</h5>
          <h5>FREE</h5>
        </Flex>
        <Flex>
          <h4>Total</h4>
          <h4>{props.total}€</h4>
        </Flex>
      </Total>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 375px;
  padding: 1em;
  margin: 0 auto;

  h2 {
    font-size: 1.7rem;
    margin-bottom: 1em;
  }
`;

const Total = styled.div`
  padding-top: 1em;
  h5 {
    font-size: 1rem;
    margin: 0.3em 0;
  }
  h4 {
    font-size: 1.25rem;
    font-weight: normal;
    margin: 0.3em 0;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const mapStateToProps = (state) => {
  const { total, items } = state;
  return { total, items };
};

export default connect(mapStateToProps)(OrderSummary);
