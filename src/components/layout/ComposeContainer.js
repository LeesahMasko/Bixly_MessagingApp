import React from "react";
import styled from "styled-components";
import ComposeMessageForm from "./ComposeMessageForm";

function ComposeContainer(props) {
  const { token } = props;

  return (
    <WrapperMessagesView>
      <h3>Compose Message</h3>
      <ComposeMessageForm
      token={token}
      />
    </WrapperMessagesView>
  );
}

export default ComposeContainer;

const WrapperMessagesView = styled.div`
  border-left: 1px solid #9da8a8;
`;
