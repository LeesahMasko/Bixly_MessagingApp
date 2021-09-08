import React from "react";
import styled from "styled-components";
import MainContainer from "./layout/MainContainer";
import Login from "./Login";

import { useState, useEffect } from "react";

function CurrentDisplay(props) {
  const { displayState, tokenAquired, token } = props;

  if (displayState === "login") {
    return <Login tokenAquired={tokenAquired} />;
  }

  if (displayState === "main") {
    return <MainContainer token={token} />;
  }
}

function MainPortal() {
  const [displayState, setDisplayState] = useState("login"); //default state should be the inbox

  const [token, setToken] = useState();

  function renderLogin() {
    setDisplayState("login");
  }

  function renderMainContainer() {
    setDisplayState("main");
  }

  useEffect(() => {
    if (token) {
      renderMainContainer();
    } else {
      renderLogin();
    }
  }, [token]);

  return (
    <Wrapper>
      <CurrentDisplay
        token={token}
        tokenAquired={setToken}
        displayState={displayState}
      />
    </Wrapper>
  );
}

export default MainPortal;

const Wrapper = styled.div``;
