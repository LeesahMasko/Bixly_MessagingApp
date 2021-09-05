import React from 'react';
import styled from 'styled-components';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';


function Header() {
    return (
        <Wrapper>
            <CatLogoWrapper>
                <img src="/Cat.png" alt="Cat Chat logo, 2 cat outlines with text in between" width= "150" height="55"></img>
            </CatLogoWrapper>
            <ProfileIconWrapper>
                <MenuRoundedIcon />
                <AccountCircleRoundedIcon />

            </ProfileIconWrapper>
        </Wrapper>

    )
}

export default Header

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;
border-bottom: 2px solid #9da8a8;
`
const CatLogoWrapper = styled.div`
padding-left: 20px;
`

const ProfileIconWrapper = styled.div `
margin: 20px;`
