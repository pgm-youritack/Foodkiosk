import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
position:"relative";
width:15rem;
height:15rem;
`
const CircleStyle = styled(motion.div)`
display:block;
width:6rem;
height:6rem;
border:3rem solid #e9e9e9;
border-Top:3rem solid #3498db;
border-radius:50%;
position:'absolute';
box-Sizing:"border-box";
top:0;
left:0;
`
const spinTransition={
    loop:Infinity,
    duration:1,
    ease:"linear"
}

const CircleLoader = () => {
  return (
    <>
    <Container>
        <CircleStyle animate={{rotate:360}} transition={spinTransition}></CircleStyle>
    </Container>
    </>
  )
}

export default CircleLoader