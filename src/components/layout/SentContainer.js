import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from "axios";
import EachMessage from '../eachMessage/EachMessage';



function SentContainer() {

    const [sentData, setSentData] = useState([])

    const [selectedMessages, setSelectedMessages] = useState([])


    useEffect(() => {

        axios({
            method: 'get',
            url: 'https://messaging-test.bixly.com/messages/sent/',
            headers: {
                authorization:'Token f44f08ea1919da2b02d3bc754f0b42cca40f1224',
                'content-type': 'application/json'
            }
        })

        .then(function (response) {
            setSentData(response.data)
        });
    }, []);

    function messagesChecked(id){

        if (selectedMessages.indexOf(id) === -1) {
            setSelectedMessages([...selectedMessages, id])
            console.log(id + " id has been added")
        }
        else {
            setSelectedMessages(selectedMessages.filter(selectedMessage => selectedMessage !== id))
            console.log(id + ' already exists, should be deleted')
        }
    }

    console.log(selectedMessages)

    function deleteSelectedMessages() {

        selectedMessages.forEach((id) => {
            axios({
            method: 'delete',
            url: 'https://messaging-test.bixly.com/messages/' + id,
            headers: {
                authorization:'Token f44f08ea1919da2b02d3bc754f0b42cca40f1224',
                'content-type': 'application/json'
            }
        })
        })


        setSelectedMessages([]);
    }




    return (
        <WrapperMessagesView>
            <h3>Sent Messages</h3> <button onClick={deleteSelectedMessages} className="deleteButton">Delete Selected Messages</button>
        {
            sentData.map(({ id, sender, title, body, sent}) => (


                        <EachMessage
                        id={id}
                        sender={sender}
                        title={title}
                        body={body}
                        sent={sent}
                        messagesChecked={messagesChecked}
                        />

            ))
        }
        </WrapperMessagesView>
    )
}

export default SentContainer;



const WrapperMessagesView = styled.div`
    border-left: 1px solid #9da8a8;
`
