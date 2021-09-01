import React from 'react';
import styled from 'styled-components';


function Header() {
    return (
        <Wrapper>
            <CatLogoWrapper>
                <img src="/Cat.png" alt="Cat Chat logo, 2 cat outlines with text in between" width= "200" height="75"></img>
            </CatLogoWrapper>
        </Wrapper>

    )
}

export default Header

const Wrapper = styled.div`

`
const CatLogoWrapper = styled.div``
