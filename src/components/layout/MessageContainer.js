import React from 'react';
import styled from 'styled-components';


function MessageContainer() {
    return (
        <Wrapper>
        <div>Message Container</div>
        </Wrapper>
    )
}

export default MessageContainer

const Wrapper = styled.div`
border-right: 2px solid #9da8a8;
border-left: 1px solid #9da8a8;
border-bottom: 2px solid #9da8a8`
