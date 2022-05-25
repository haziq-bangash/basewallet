import styled from 'styled-components';
import { useWeb3 } from '@3rdweb/hooks';
import Image from 'next/image';

import Dashboard from './Dashboard';
import baseWalletLogo from '../assets/baseWallet.png';

export default function Home() {
  const {address, connectWallet} = useWeb3();
  return (
  <Wrapper>
    {address? (
      <Dashboard address={address} />
    ) : (
      <WalletConnect>
        <Logo>
            <Image src={baseWalletLogo} alt="Coinbase logo" />
        </Logo>
        <Button onClick={() => connectWallet('injected')} >Connect Wallet</Button>
        <Details>
          You need Chrome to be <br/> able to run this application.
        </Details>
    </WalletConnect>
    )}
  </Wrapper>
  )
}

const Wrapper = styled.div`
   display: flex;
   height: 100vh;
   max-width: 100vw;
   background-color: #0a0b0d;
   color: white;
   display: grid;
   place-items: center;
`

const WalletConnect = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

const Logo = styled.div`
   width: 50%;
   object-fit: contain;
   margin-left: 1.5rem;
   margin-top: 5rem;
`

const Button = styled.div`
   Border: 1px solid #282b2f;
   padding: 0.8rem;
   font-size: 1.3rem;
   font-weight: 500;
   border-radius: 0.4rem;
   background-color: #3773f5;
   color: #000;

   &:hover{
    cursor:pointer;
  }
  
`

const Details = styled.div`
   font-size: 1.2rem;
   text-align:center;
   margin-top: 1rem;
   font-weight: 500;
   color: #282b2f;
`
