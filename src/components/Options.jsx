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
  { id: 1, pita: "pita klein" },
  { id: 2, pita: "pita groot" },
  { id: 3, pita: "pita kip klein" },
  { id: 4, pita: "pita kip groot" },
  { id: 5, pita: "pita mix klein" },
  { id: 6, pita: "pita mix groot" },
  { id: 7, pita: "pita kipfilet klein" },
  { id: 8, pita: "pita kipfilet groot" },
];

const Options = ({ options }) => {
  return (
    <>
      <OptionsSection>
        <CategoryTitle>{options}</CategoryTitle>
        <OptionsList>
        {pita.map((item) => (
        <Option item={item} key={item.id}></Option>
      ))}
        </OptionsList>
      </OptionsSection>
    </>
  );
};

export default Options;
