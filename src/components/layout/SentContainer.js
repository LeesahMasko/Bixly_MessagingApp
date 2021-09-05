import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from "axios";

import { emailData } from '../data/temp/EmailData';
import EachMessage from '../eachMessage/EachMessage';





function SentContainer() {

    const [sentData, setSentData] = useState([])

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
    return (
        <WrapperMessagesView>
            <p>Sent Messages</p>
        {
            sentData.map(({ sender, title, body, sent}) => (


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

export default SentContainer



const WrapperMessagesView = styled.div`

border-left: 1px solid #9da8a8;`



