import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import EachMessage from "../eachMessage/EachMessage";

function SentContainer(props) {
  const { token } = props;
  const [sentData, setSentData] = useState([]);
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    if (refresh) {
      axios({
        method: "get",
        url: "https://messaging-test.bixly.com/messages/sent/",
        headers: {
          authorization: "Token " + token,
          "content-type": "application/json",
        },
      }).then(function (response) {
        setSentData(response.data);
      })
      .catch(function (error) {

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
     .catch(function (error) {

      })
  }

  return (
    <WrapperMessagesView>
      <h3 className="headerText">Sent Messages</h3>{" "}
      <button onClick={deleteSelectedMessages} className="deleteButton">
        Delete Selected Messages
      </button>
      {sentData.map(({ id, sender, title, body, sent }) => (
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

export default SentContainer;

const WrapperMessagesView = styled.div`
  border-left: 1px solid #9da8a8;
  .headerText {
    color: #38703a;
  }

  .deleteButton {
    color: #38703a;
    cursor: pointer;
    background-color: light gray;
  }
`;
