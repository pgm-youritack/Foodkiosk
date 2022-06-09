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

`;

const CategoryList = ({onClick,items}) => {
  
  
  return (
    <CategoryListStyle key={4564564894798} >
      {items.map((item) => (
        <CategoryItem  onClick={onClick} item={item} key={item.id}></CategoryItem>
      ))}
    </CategoryListStyle>
  );
};

export default CategoryList;
