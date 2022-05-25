import React, { useState } from 'react';

import Transfer from './Transfer';
import Recieve from './Recieve';
import CoinSelector from './CoinSelector';

import styled from 'styled-components';
// import { Tailspin } from 'react-loader-spinner';

const TransferModal = ({sanityTokens, thirdWebTokens, walletAddress}) => {
    const [ action, setAction ] = useState('Send')
    const [ selectedToken, setSelectedToken ] = useState(sanityTokens[0])

    console.log('TransferModal selected Token: ', selectedToken)

    const selectedStyle = {
        color: '#3773f5',
    }

    const unSelectedStyle = {
        border: '1px solid #282b2f',
    }

    const selectedModal = option => {
        switch (option) {
            case 'Send':
                return <Transfer selectedToken={selectedToken} setAction={setAction} thirdWebTokens={thirdWebTokens} walletAddress={walletAddress} />
            case 'Recieve':
                return <Recieve selectedToken={selectedToken} setAction={setAction} walletAddress={walletAddress} />
            case 'select':
                return <CoinSelector setAction={setAction} selectedToken={selectedToken} setSelectedToken={setSelectedToken} sanityTokens={sanityTokens} thirdWebTokens={thirdWebTokens} walletAddress={walletAddress} />
            case 'transferring':
                return <div
                       style={{
                           width: '100%',
                           height: '100%',
                           display: 'flex',
                           felxDirection: 'column',
                           justifyContent: 'center',
                           alignItems: 'center',
                           fontSize: '1.5rem',
                       }}
                >
                           <h2>Transfer in progress....</h2>
                       </div>
            case 'transferred':
                return <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '1.5rem',
                }}>
                <h2 style={{color: 'green'}} >Transfer Complete</h2>
                </div>
            default: 
            return <h2>Send</h2>
        }
    }
    return (
        <Wrapper>
            <Selector>
                <Option style={action === 'Send' ? selectedStyle : unSelectedStyle} onClick={() => setAction('Send')} >
                   <p >Send</p>
                </Option>
                <Option style={action === 'Recieve'  ? selectedStyle : unSelectedStyle} onClick={() => setAction('Recieve')} >
                   <p >Recieve</p>
                </Option>
            </Selector>
            <ModalMain>
                { selectedModal(action) }
            </ModalMain>
        </Wrapper>
    )
}

export default TransferModal

const Wrapper = styled.div`
   height: 35rem;
   width: 27rem;
   color: white;
   border: 1px solid #282b2f;
   display: flex;
   flex-direction: column;
`

const Selector = styled.div`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   height: 5rem;
`

const Option = styled.div`
   height: 100%;
   width: 100%;
   display: grid;
   place-items: center;
   font-size: 1.2rem;
   font-weight: 600;

   &:hover {
    cursor: pointer;
    backgroundColor: #111234;
}
`

const ModalMain = styled.div`
   padding: 1rem;
   flex: 1;
`