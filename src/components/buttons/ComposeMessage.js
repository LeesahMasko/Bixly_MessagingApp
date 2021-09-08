import React from "react";
import styled from "styled-components";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded"; //Compose icon

const ComposeMessage = () => {
  return (
    <Wrapper>
      <CreateRoundedIcon />
      <p>Compose</p>
    </Wrapper>
  );
};

export default ComposeMessage;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 35% auto;
  width: auto;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 0 2px 3px 0 #9da8a8;
  padding: 5px 30px 5px 6px;
  align-items: center;
  background-color: orange;
  cursor: pointer;
  color: white;
  font-weight: 800;

  :hover {
    box-shadow: 0 3px 5px 0 #9da8a8;
    background-color: #f5d362;
    color: #38703a;
  }
`;
