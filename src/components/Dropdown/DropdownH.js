import React from "react";

//import styles and assets
import styled from "styled-components";

export const DropdownCategory = ({ data }) => {
  return (
    <Container>
      <Left>
        <Top>{data.collection}</Top>
        <Bottom>
          <div className="left">{data.name}</div>
          <div className="right">80x44x46 cm</div>
        </Bottom>
      </Left>
      <Right>
        <i className="fas fa-chevron-down"></i>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 0.5em;
  padding: 0.4em 1em;
  border: 1px solid #dadbda;
`;

const Left = styled.div`
  margin-right: 2em;
`;
const Right = styled.div`
  margin-right: 0.5em;
`;
const Top = styled.div`
  font-size: 0.75rem;
  color: #adadad;
`;
const Bottom = styled.div`
  display: flex;

  .left {
    font-size: 1rem;
    font-weight: 300;
    margin-right: 0.8em;
  }

  .right {
    font-size: 0.875rem;
    color: #6f6f6f;
  }
`;
