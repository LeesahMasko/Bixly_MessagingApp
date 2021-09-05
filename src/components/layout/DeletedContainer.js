import React from 'react';
import styled from 'styled-components';

import { emailData } from '../data/temp/EmailData';
import EachMessage from '../eachMessage/EachMessage';





function DeletedContainer() {
    return (
        <WrapperMessagesView>
         <p>Deleted Messages</p>

        {
            emailData.map(({ sender, title, body, sent}) => (


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

export default DeletedContainer



const WrapperMessagesView = styled.div`

border-left: 1px solid #9da8a8;`



