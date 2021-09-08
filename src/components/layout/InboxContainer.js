import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import EachMessage from "../eachMessage/EachMessage";

function InboxContainer(props) {
  const { token } = props;
  const [inboxData, setInboxData] = useState([]);
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (refresh) {
      axios({
        method: "get",
        url: "https://messaging-test.bixly.com/messages/",
        headers: {
          authorization: "Token " + token,
          "content-type": "application/json",
        },
      }).then(function (response) {
        setInboxData(response.data);
      })
      .catch(function (error){
        setErrorMessage(error.message)

      })
      setRefresh(false);
    }
  }, [refresh]);

  function messagesChecked(id) {
    if (selectedMessages.indexOf(id) === -1) {
      setSelectedMessages([...selectedMessages, id]);
      console.log(id + " id has been added");
    } else {
      setSelectedMessages(
        selectedMessages.filter((selectedMessage) => selectedMessage !== id)
      );
      console.log(id + " already exists, should be deleted");
    }
  }

  console.log(selectedMessages);

  function deleteSelectedMessages() {
    //Promise.all will wait for all deletes to finish, before refreshing
    Promise.all(
      selectedMessages.map((id) => {
       return axios({
          method: "delete",
          url: "https://messaging-test.bixly.com/messages/" + id,
          headers: {
            authorization: "Token " + token,
            "content-type": "application/json",
          },
        });
      })
    ).then(() => {
      setSelectedMessages([]);
      setRefresh(true);
    })
    .catch(function (error){
      setErrorMessage(error.message)
      })
  }

  return (
    <WrapperMessagesView>
      <WrapperError>
       {errorMessage && <p>There was an error: {errorMessage}</p>}
       </WrapperError>
      <h3 className="headerText">Inbox Messages</h3>{" "}
      <button onClick={deleteSelectedMessages} className="deleteButton">
        Delete Selected Messages
      </button>
      {inboxData.map(({ id, sender, title, body, sent }) => (
        <EachMessage
          id={id}
          sender={sender}
          title={title}
          body={body}
          sent={sent}
          messagesChecked={messagesChecked}
        />
      ))}
    </WrapperMessagesView>
  );
}

export default InboxContainer;

const WrapperMessagesView = styled.div`
  border-left: 1px solid #9da8a8;

  .headerText {
    color: #38703a;
  }

  .deleteButton {
    cursor: pointer;
    color: #38703a;
    background-color: light gray;
  }
`;

const WrapperError = styled.div`
background-color: red
`;
