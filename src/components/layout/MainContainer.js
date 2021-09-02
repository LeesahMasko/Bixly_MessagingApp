import React from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';
import MessageContainer from './MessageContainer';
import { useState } from 'react';

function MainContainer() {

    const [isRendering, setIsRendering] = useState();

    function renderInbox() {

    }

    function renderSent() {

    }

    function renderDeleted() {

    }

    function renderComposeForm() {

    }

    // const handleClick = () => {
    //     setIsRendering();
    // }
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



