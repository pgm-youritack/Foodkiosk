import React, {useState} from 'react'
import styles from'styled-components';
import Modal from './Modal';
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
  const [showModal, setShowModal] = useState();


  const Toggle = (content) => {
    setShowModal(!showModal);
  };
  let img =null;
  try {
     img = require(`../assets/images/pita/${item.name}.png`)
  } catch (error) {
    console.log(error)
  }

  return (
      <><Item onClick={() => Toggle(item)} >
        {img && <Image src={img} alt={item.name} />}
      <ItemTitle>{item.name}</ItemTitle>
      </Item>
      <Modal
        show={showModal}
        close={Toggle}
        modalcontent={item.name}
      ></Modal>
      </>
    
  )
}
