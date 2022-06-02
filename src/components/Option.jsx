import React from 'react'
import styles from'styled-components';

const Item=styles.li`
display:flex;
flex-direction:column;
width:252px;
height:451px;
align-items:center;
background-color:#CFBDBD;

`
const Image = styles.img`
margin:0rem;
  width:252px;
  height:180px;

`
const ItemTitle = styles.p`
margin:0rem;
font-size:80px;

`
export const Option = ({item}) => {
    const img = require(`../assets/images/pita/${item.pita}.png`)
  return (
      <><Item><Image src={img} alt={item.pita} />
      <ItemTitle>{item.pita}</ItemTitle>
      </Item></>
    
  )
}
