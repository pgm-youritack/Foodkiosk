import React from "react";
import styles from "styled-components";
import { Option } from "./Option";

const OptionsSection = styles.div`
display:flex;
flex-direction:column;
text-align:center;
align-items:center;
width:100%
`;

const CategoryTitle = styles.h1`
font-family:'Arial';
font-size:120px;

`;
const OptionsList = styles.ul`
display:grid;
grid-template-columns: repeat(2,1fr);
gap: 1rem;
margin:2rem;
padding:0rem;
align-items:center;
text-align:center;
overflow-y: scroll;
scrollbar-width:none;
height:1000px;
`;

const Options = ({ options,food }) => {
  return (
    <>
      <OptionsSection>
        <CategoryTitle>{options}</CategoryTitle>
        <OptionsList>
        {food.map((item) => (
        <Option item={item} key={item.id}></Option>
      ))}
        </OptionsList>
      </OptionsSection>
    </>
  );
};

export default Options;
