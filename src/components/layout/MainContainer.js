import React from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';
import MessageContainer from './MessageContainer';

function MainContainer() {
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



