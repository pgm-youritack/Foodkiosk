import React, {  useState } from "react";
import styles from "styled-components";
import CategoryList from "../components/CategoryList";
import Options from "../components/Options";
import logo from "../assets/images/pita.png";
import { FOOD_API } from "../constants/api";
import useFetch from "../hooks/useFetch";
// import { ShoppingCartContext } from "../App";
import { motion } from "framer-motion";
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
  const [activeCategory, setActiveCategory] = useState("pita")
  // const [cart, setCart] = useContext(ShoppingCartContext);
  const changeOption = (option) => {

    setActiveCategory(option);
  };
  return (
    <>
      {error ? (
        <div>{error.message}</div>
      ) : isLoading || !data ? (
        <div>its loading</div>
      ) : (
        <motion.div
        initial={{scale:0}}
        animate={{scale:1,transition:{duration:0.5}}}
        exit={{scale:0,transition:{duration:0.3}}}
        >
          <Header>
            <Logo src={logo} alt="logo" />
          </Header>
          <MenuFlex>
            <CategoryList onClick={changeOption} items={data.categories}></CategoryList>
            <Options options={activeCategory} food={data[activeCategory]}></Options>
          </MenuFlex>
        </motion.div>
      )}
    </>
  );
};

export default Foodkiosk;
