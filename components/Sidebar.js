import React, {useState} from 'react';

import baseWalletLogo from '../assets/baseWallet.png';
import {navItems} from '../static/navItems';
import Image from 'next/image';

import styled from 'styled-components';

const Sidebar = () => {

    const [activeIcon, setActiveIcon] = useState(navItems[0].title);

  return (
    <Wrapper>
        <LogoContainer>
            <Logo>
                <Image src={baseWalletLogo} alt="Coinbase logo" />
            </Logo>
        </LogoContainer>
        <NavItemsContainer>
            {navItems.map((item, index) => (
                <NavItem key={index} onClick={() => setActiveIcon(item.title)} >
                    <NavIcon style={{ color: item.title === activeIcon && '#3773f5' }} >
                        {item.icon}
                    </NavIcon>
                    <NavTitle>{item.title}</NavTitle>
                </NavItem>
            ))}
        </NavItemsContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
   height: calc(100vh);
   border-right: 1px solid #282b2f;
   width: calc(22rem - 16px - 16px );
   padding: 0 1rem;
`

const LogoContainer = styled.div`
   margin: 1.5rem 0;
`

const Logo = styled.div`
   width: 64%;
   object-fit: contain;
   margin-left: 1.5rem;
   margin-top: 2rem;
`

const NavItemsContainer = styled.div`
   margin-top: 2rem;

   &:hover {
       cursor: pointer;
   }
`

const NavItem = styled.div`
   display: flex;
   align-items: center;
   font-size: 1.3rem;
   font-weight: 500;
   border-radius: 0.5rem;
   margin-bottom : 1.5rem;
   height: 4rem;

   &:hover {
       background-color: #141519;
   }
`

const NavIcon = styled.div`
   background-color: #141519;
   padding: 0.7rem;
   border-radius: 50%;
   margin: 0 1rem;
   display: grid;
   place-items: center;
`

const NavTitle = styled.div`
   font-size: 1.25rem;
   font-weight: 500;
`

export default Sidebar