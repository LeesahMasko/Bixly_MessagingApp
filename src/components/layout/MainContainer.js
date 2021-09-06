import React from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import { useState } from "react";
import InboxContainer from "./InboxContainer";
import SentContainer from "./SentContainer";
import ComposeContainer from "./ComposeContainer";

function CurrentDisplay(props) {
  const { displayState } = props;

  if (displayState === "inbox") {
    return <InboxContainer />;
  }

  if (displayState === "sent") {
    return <SentContainer />;
  }

  if (displayState === "compose") {
    return <ComposeContainer />;
  }
}

function MainContainer() {
  //Possibly a first step to check for auth token. If so display default state (inbox)

  const [displayState, setDisplayState] = useState("inbox"); //default state should be the inbox

  function renderSent() {
    setDisplayState("sent");
  } // update state to have message container render sent messages

  function renderInbox() {
    setDisplayState("inbox");
  } // update state to have message container render deleted messages

  function renderComposeForm() {
    setDisplayState("compose");
  } // update state to have compose message form render

  return (
    <Wrapper>
      <SideBar
        renderSent={renderSent}
        renderInbox={renderInbox}
        renderComposeForm={renderComposeForm}
      />
      <CurrentDisplay displayState={displayState} />
    </Wrapper>
  );
}

export default MainContainer;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 270px auto;
`;
