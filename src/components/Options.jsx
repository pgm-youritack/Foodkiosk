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
columns:2;
margin:2rem;
padding:0rem;
width:532px;
height:1089px;
align-items:center;
text-align:center;
overflow-y: scroll;
scrollbar-width:none;
`;

const pita = [
  { id: 1, name: "pita klein" },
  { id: 2, name: "pita groot" },
  { id: 3, name: "pita kip klein" },
  { id: 4, name: "pita kip groot" },
  { id: 5, name: "pita mix klein" },
  { id: 6, name: "pita mix groot" },
  { id: 7, name: "pita kipfilet klein" },
  { id: 8, name: "pita kipfilet groot" },
];

const Options = ({ options,food }) => {
  console.log(food)
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
