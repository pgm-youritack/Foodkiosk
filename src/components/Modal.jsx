import React from 'react'
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
const Modal = ({show,close,modalcontent}) => {
    console.log(modalcontent)
  return (
      <>{show ?
        <Modalcomponent>
        <ModalContent> <h1>test</h1>
        <p>{modalcontent}</p>
        <Buttons><button onClick={()=>close()}>Delete</button><button onClick={()=>close()}>Cancel</button></Buttons>
        </ModalContent>
        </Modalcomponent>
    :null}
    </>
      
    
  )
}

export default Modal