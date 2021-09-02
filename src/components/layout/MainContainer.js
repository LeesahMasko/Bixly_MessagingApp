import React from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';
import MessageContainer from './MessageContainer';
import { useState } from 'react';

function MainContainer() {

    //Possibly a first step to check for auth token. If so display default state (inbox)

    const [isRendering, setIsRendering] = useState(); //default state should be the inbox


    function renderSent() {

    } // update state to have message container render sent messages

    function renderDeleted() {

    } // update state to have message container render deleted messages

    function renderComposeForm() {

    } // update state to have compose message form render


    return (
        <Wrapper>
            <SideBar />
            <MessageContainer />
        </Wrapper>
    )
}

export default MainContainer;

const Wrapper = styled.div`
display: grid;
grid-template-columns: 270px auto`



