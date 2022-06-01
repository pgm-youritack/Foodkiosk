import React from "react";
import styles from "styled-components";

const ListItem = styles.li`
  margin-top:3rem;
  width:236px;
  height:241px;
  text-decoration:none;
  list-style:none;
  margin-bottom:5rem;
`;
const Image = styles.img`
  width:180px;
  height:180px;
  border-radius:100px;
`

const CategoryItem = ({ item,onClick}) => {
  const img = require(`../assets/images/categories/${item.category}.png`)
  return (
    <>
      <ListItem onClick={()=>onClick(item.category)} key="{item.id}">
        <Image src={img} alt={item.category} />
        {item.category}
      </ListItem>
    </>
  );
};

export default CategoryItem;
