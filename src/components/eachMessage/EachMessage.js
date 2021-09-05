import React from 'react';
import styled from 'styled-components';
import { Checkbox } from '@material-ui/core';

const EachMessage = ({ sender, title, body, sent}) => {

    return (
<Wrapper>
    <Checkbox />
    {/* <p className ={ !read && 'unread'}>{sender}</p>
    <div><p className ={ !read && 'unread'}>{title}</p> - <span>{body}</span></div>
    <p className ={ !read && 'unread'}>{sent}</p> */}
    <p>{sender}</p>
    <div><p>{title}</p> - <span>{body}</span></div>
    <p>{sent}</p>

</Wrapper>
    )
}

export default EachMessage

const Wrapper = styled.div`
padding-left: 20px;
padding-right: 20px;
border-top: 1px solid lightgray;
align-items: center;
cursor: pointer;
gap: 10px;
display:grid;


grid-template-columns: min-content min-content auto auto;
div {
    display: flex;

    span{
        color: gray;
    }
}

:hover {
    box-shadow: 0 3px 3px 0 #9da8a8;
    color: #38703a;
}
`
