import React, { useContext, useState } from "react";
import styles from "styled-components";
import CategoryList from "../components/CategoryList";
import Options from "../components/Options";
import logo from "../assets/images/pita.png";
import { FOOD_API } from "../constants/api";
import useFetch from "../hooks/useFetch";
import { ShoppingCartContext } from "../App";
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
  const [data, error, isLoading] = useFetch(FOOD_API);
  const [cart, setCart] = useContext(ShoppingCartContext);
  const [showOptions, setShowOptions] = useState(data);
  const changeOption = (option) => {
    option = option.toUpperCase();
    setShowOptions(option);
  };
  return (
    <>
      {error ? (
        <div>{error.message}</div>
      ) : isLoading || !data ? (
        <div>its loading</div>
      ) : (
        <div>
          <Header>
            <Logo src={logo} alt="logo" />
          </Header>
          <MenuFlex>
            <CategoryList onClick={changeOption} items={data.categories}></CategoryList>
            <Options options={showOptions} items={data.pita}></Options>
          </MenuFlex>
        </div>
      )}
    </>
  );
};

export default Foodkiosk;
