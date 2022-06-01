import React from "react";
import styles from "styled-components";
import CategoryItem from "./CategoryItem";

const CategoryListStyle = styles.ul`
  display:flex;
  flex-direction:column;
  margin:2rem;
  padding:0rem;
  width:339px;
  height:1109px;
  box-shadow: 0px 3px 4px #00000040;
  border-radius:25px;
  align-items:center;
  text-align:center;
  overflow-y: scroll;
  scrollbar-width:none;
  -ms-overflow-style: none; 
  &::-webkit-scrollbar {
    display: none;
`;

const categoryItems = [
  { id: 1, category: "pita"},
  { id: 2, category: "kapsalon" },
  { id: 3, category: "durum" },
  { id: 4, category: "snacks" },  
  { id: 5, category: "frietjes" },  
  { id: 6, category: "drank" },  
];
const CategoryList = ({onClick}) => {
  return (
    <CategoryListStyle >
      {categoryItems.map((item) => (
        <CategoryItem onClick={onClick} item={item}></CategoryItem>
      ))}
    </CategoryListStyle>
  );
};

export default CategoryList;
