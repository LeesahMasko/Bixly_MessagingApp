import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios";
import EachMessage from '../eachMessage/EachMessage';





function InboxContainer() {

    const [inboxData, setInboxData] = useState([])

    useEffect(() => {

        axios({
            method: 'get',
            url: 'https://messaging-test.bixly.com/messages/',
            headers: {
                authorization:'Token f44f08ea1919da2b02d3bc754f0b42cca40f1224',
                'content-type': 'application/json'
            }
        })

        .then(function (response) {

            setInboxData(response.data);
        })

        // .catch(function (err) {

        // })

    }, []);


    return (
        <WrapperMessagesView>
        <p>Inbox Messages</p>

        {
            inboxData.map(({ sender, title, body, sent}) => (


                        <EachMessage
                        sender={sender}
                        title={title}
                        body={body}
                        sent={sent}
                        />

            ))
        }
        </WrapperMessagesView>
    )
}

export default InboxContainer



const WrapperMessagesView = styled.div`

border-left: 1px solid #9da8a8;`



