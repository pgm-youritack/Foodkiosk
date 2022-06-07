import React, { useState } from 'react'
import styled from 'styled-components'
const Modalcomponent = styled.div`
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgb(0,0,0);
background-color: rgba(0,0,0,0.4);

`
const ModalContent = styled.div`
border-radius:25px;
background-color: #fefefe;
align-items:center;
text-align:center;
margin: 15% auto;
padding: 20px;
border: 1px solid #888;
width: fit-content;
`
const Buttons = styled.div`
display:flex;
justify-content:space-between;
`
const AmountCont = styled.div`
display:flex;
flex-direction:row;
`
const Modal = ({show,close,productName,productPrice,defaultAmount = 0, children}) => {
    const [amount ,setAmount]=useState(defaultAmount);
const setCartContext=(val)=>{
  setAmount(val);
}
const detractAmount =()=>{
  if(amount<=1)return setCartContext(0);
  return setCartContext(parseInt(amount)-1)
}

  return (
      <>{show ?
        <Modalcomponent>
        <ModalContent> <h1>{productName}</h1>
        <h2>{productPrice}</h2>
        <AmountCont><button onClick={detractAmount} >-</button><input value={amount}></input><button onClick={()=>setCartContext(parseInt(amount)+1)}>+</button> </AmountCont>
        <button onClick={()=>close()}>keer terug</button>
        </ModalContent>
        </Modalcomponent>
    :null}
    </>
      
    
  )
}

export default Modal