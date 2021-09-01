import React from 'react';
import styled from 'styled-components';
import ComposeMessage from '../buttons/ComposeMessage';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import InboxRoundedIcon from '@material-ui/icons/InboxRounded';
import SlideshowRoundedIcon from '@material-ui/icons/SlideshowRounded'; //sent
import DeleteSweepRoundedIcon from '@material-ui/icons/DeleteSweepRounded'; //deleted messages
function Sidebar() {
    return (
        <Wrapper>
            <ComposeMessageWrapper>
                <ComposeMessage />
            </ComposeMessageWrapper>

            <SideButtonsWrapper>
<div>All the other stuff</div>
            </SideButtonsWrapper>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
border-right: 1px solid #9da8a8;
border-left: 2px solid #9da8a8;
border-bottom: 2px solid #9da8a8`

const ComposeMessageWrapper = styled.div``

const SideButtonsWrapper = styled.div``
