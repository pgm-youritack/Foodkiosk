import React from 'react'
import notFound from '../assets/images/notFound.gif'
import styles from 'styled-components';

const NotFoundStyle = styles.div`
margin-top:30rem;
align-self:center;
display:flex;
flex-direction:column;
justify-content:space-evenly;
text-align:center;
font-size:80px
`
const NotFound = () => {
  return (
    <NotFoundStyle>
      <img src={notFound} alt="" />
      what you have written doesnt exist
    </NotFoundStyle>
    
  )
}

export default NotFound