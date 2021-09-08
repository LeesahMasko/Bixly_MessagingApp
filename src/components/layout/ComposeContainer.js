import React from "react";
import styled from "styled-components";
import ComposeMessageForm from "./ComposeMessageForm";

function ComposeContainer() {
  return (
    <WrapperMessagesView>
      <h3>Compose Message</h3>
      <ComposeMessageForm />
    </WrapperMessagesView>
  );
}

export default ComposeContainer;

const WrapperMessagesView = styled.div`
  border-left: 1px solid #9da8a8;
`;
