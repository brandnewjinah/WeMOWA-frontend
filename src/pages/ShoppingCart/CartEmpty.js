import React from "react";

//import styles and assets
import styled from "styled-components";

const CartEmpty = () => {
  //   goToLink = () => {
  //     this.props.history.push("/");
  //   };
  return (
    <Container>
      <div>You haven't added anything yet</div>
      <button>Start Shopping</button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  font-family: "Work Sans", sans-serif;
  margin: 0 auto;
  text-align: center;

  button {
    width: 50%;
    margin: 3em 0 5em 0;
  }
`;

export default CartEmpty;
