import React, { useState,useContext } from 'react'
import styled from 'styled-components'
import { ShoppingCartContext } from '../App'
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
display:flex;
flex-direction:column;
gap:1rem;
margin: 50% auto;
border: 1px solid #888;
width: 979px;
`
const Modalimage= styled.img`
border-radius:25px 25px 0px 0px;
margin:0px;
width:979px;
height:400px;
`
const Ingredient = styled.p`
margin:0rem;
font-size:30px;
`
const AmountCont = styled.div`
display:flex;
flex-direction:row;
`
const Increase = styled.button`
background-color:green;
border-radius:0px 25px 25px 0px;
color:white;
border:none;
height:50px;
width:50px;
font-size:40px;
`
const Decrease = styled.button`
border-radius:25px 0px 0px 25px;
background-color:red;
color:white;
border:none;
height:50px;
width:50px;
font-size:40px;
`
const AmountInput = styled.input`
border solid 1px lightgrey;
width:100px;
font-size:30px;
text-align:center;
`
const Modal = ({show,close,item,image,defaultAmount = 0}) => {
  const ingredients = item.content;
  const [cart,setCart] = useContext(ShoppingCartContext);
    const [amount ,setAmount]=useState(cart[item.id] ? cart[item.id].amount : defaultAmount);
     
const setCartContext=(val)=>{
  setAmount(val);
  setCart({
    ...cart,
    [item.id]:{...item,amount:val}
  })
}
const detractAmount =()=>{
  if(amount<=1){
    return setCartContext(0)};
  return setCartContext(parseInt(amount)-1)
}



  return (
      <>{show ?
        <Modalcomponent>
        <ModalContent>
        <Modalimage src={image} alt={item.name} />  
         <h1>{item.name}</h1>
         <h2>Inhoud</h2>
         {ingredients.map((ingredient) => (
        <Ingredient>{ingredient}</Ingredient>
      ))}
        <AmountCont><Decrease onClick={detractAmount} >-</Decrease><AmountInput  onChange={e=> setCartContext(e.target.valule)} value={amount} readOnly></AmountInput><Increase onClick={()=>setCartContext(parseInt(amount)+1)}>+</Increase> </AmountCont>
        <button onClick={()=>close()}>keer terug</button>
        </ModalContent>
        </Modalcomponent>
    :null}
    </>
      
    
  )
}

export default Modal