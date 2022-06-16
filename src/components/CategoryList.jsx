import React, { useState } from "react";
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
  const [selected,setSelected]=useState(items[0].id);

  const handleCategorySelect = (e, id) => {
    onClick(e);
    setSelected(id);
  }
  
  return (
    <>    <CategoryListStyle key={4564564894798} >
      {items.map((item) => (
        <CategoryItem isActive={item.id===selected } onClick={(e) => handleCategorySelect(e, item.id)} item={item} key={item.id}></CategoryItem>
      ))}
    </CategoryListStyle>
    </>

  );
};

export default CategoryList;
