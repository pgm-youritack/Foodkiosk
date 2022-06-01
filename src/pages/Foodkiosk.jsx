import React, { useState } from "react";
import styles from "styled-components";
import CategoryList from "../components/CategoryList";
import Options from "../components/Options";
import logo from "../assets/images/pita.png"

const MenuFlex = styles.div`
  display:flex;
  flex-direction:row;
  gap:3rem;
`;
const Header = styles.div`
align-items:center;
  text-align:center;
`;
const Logo = styles.img`
  width:285px;
  height:285px;
`;

const Foodkiosk = () => {
  const [showOptions, setShowOptions] = useState("PITA");
  const changeOption = (option) => {
    option = option.toUpperCase();
    setShowOptions(option);
  };
  return (
    <>
      <Header><Logo src={logo} alt="logo"/></Header>
      <MenuFlex>
        <CategoryList onClick={changeOption}></CategoryList>
        <Options options={showOptions}></Options>
      </MenuFlex>
    </>
  );
};

export default Foodkiosk;
