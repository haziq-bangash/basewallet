import React, { useState, useEffect } from 'react'

import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../../lib/sanity';

const CoinItem = ({
    token,
    sender,
    setAction,
    selectedToken,
    setSelectedToken,
    sanityTokens,
    thirdWebTokens,
}) => {
    const [imageUrl, setImageUrl] = useState(null)
    const [balance, setBalance] = useState('fetching.....')

    useEffect(() => {
        const getBalance = async () => {
      let activeThirdWebToken

      thirdWebTokens.map(thirdWebToken => {
          if(thirdWebToken.address === token.contractAddress) {
              activeThirdWebToken = thirdWebToken
          }
      })
      const balance = await activeThirdWebToken.balanceOf(sender)

      return await setBalance(balance.displayValue.split('.')[0])
    }

    const getImageUrl = async () => {
        const url = imageUrlBuilder(client).image(token.logo).url() //go to sanity and give me url of logo of selected coin
        // console.log('url', url)
        setImageUrl(url)
    }

    getBalance()
    getImageUrl()
    }, [])
    
  return (
    <Wrapper style={{ backgroundColor: selectedToken.name === token.name && '#141519' }} onClick = {() => {setSelectedToken(token); setAction('Send')}} >
        <Main>
            <Icon><img src={imageUrl} /></Icon>
            <NameDetails>
                <Name>{token.name}</Name>
                <Symbol>{token.symbol}</Symbol>
            </NameDetails>
        </Main>
        <Balance>{balance} {token.symbol}</Balance>
        <IsSelected>
            {(selectedToken.contractAddress === token.contractAddress) && (
                <FaCheck />
            ) }
        </IsSelected>
    </Wrapper>
  )
}

export default CoinItem

const Wrapper = styled.div`
   display :flex;
   align-items :center;
   padding: 1rem 0.5rem;
   border-radius: 0.5rem;
   margin-bottom: 0.3rem;
`

const Main = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
`

const Icon = styled.div`
   margin-right: 1rem;
   height: 1.8rem;
   width: 1.8rem;
   border-radius: 50%;
   overflow: hidden;
   display: grid;
   place-items: center;

   & > img {
       height: 120%;
       width: 120%;
       object-fit: cover;
   }
`

const NameDetails = styled.div``

const Name = styled.div`
   font-size: 1.1;
   margin-bottom: 0.2rem;
`

const Symbol = styled.div`
   color: #888f9b;
   font-size: 0.8rem;
`

const Balance = styled.div``

const IsSelected = styled.div`
    margin-left: 0.5rem;
    color: #3773f5;
`