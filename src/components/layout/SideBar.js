import React from 'react';
import styled from 'styled-components';
import ComposeMessage from '../buttons/ComposeMessage';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import SlideshowRoundedIcon from '@material-ui/icons/SlideshowRounded'; //sent

function Sidebar(props) {

    const {renderSent, renderInbox, renderComposeForm } = props;

    return (
        <Wrapper>
            <ComposeMessageWrapper>
             <button onClick={renderComposeForm}><ComposeMessage /></button>
            </ComposeMessageWrapper>

            <SideButtonsWrapper>

                   <SidebarButtonItems>  <button onClick={renderInbox}><MailOutlineRoundedIcon/>Inbox </button></SidebarButtonItems>
                   <SidebarButtonItems>  <button onClick={renderSent}><SlideshowRoundedIcon />Sent Messages</button></SidebarButtonItems>




            </SideButtonsWrapper>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
border-left: 2px solid #9da8a8;
height:100vh`

const ComposeMessageWrapper = styled.div`
border-top: 1px solid lightgray;
`
const SideButtonsWrapper = styled.div``

const SidebarButtonItems = styled.div`
display: grid;
grid-template-columns: 15% auto;
color: #9da8a8;
padding: 5px 20px;
cursor: pointer;

:hover {
    box-shadow: 0 0 3px 0 #9da8a8;
    color: #38703a;
}

`


// padding: 5px;
// margin:5px;
