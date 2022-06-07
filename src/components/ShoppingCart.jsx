import React, { useContext, useState } from "react";
import { ShoppingCartContext } from "../App";
import styled from "styled-components";
import shoppingcart from "../assets/images/shopping_cart.png";
import { motion } from "framer-motion";

const ShoppingCartContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShoppingAmount = styled.div`
  position: absolute;
  font-size: 40px;
  top: 20px;
  right: 10px;
  background-color: red;
  width: 70px;
  height: 70px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
const ShoppingCartItem = styled.div`
  background-color: white;
  border-radius: 50%;
  position: relative;
  border: 1px solid black;
  padding: 0rem;
  margin: 0rem;
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 2rem;
`;
const ShoppingCartImage = styled.img`
  width: 100px;
  height: 100px;
`;
const ShoppingCartListContainer = styled(motion.div)`
  width: 100%;
  border: solid black 1px;
  border-radius: 25px;
  height: 5rem;
  background-color: white;
`;
const ShoppingCartList = styled.ul`
  padding: 5rem 0rem 0rem 5rem;
`;
const shoppingCartAnimation = {
  open: { y: -1500 },
  closed: { y: 0 },
};
const shoppingCartListAnimation = {
  open: { height: "100rem" },
  closed: { height: "5rem" },
};

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useContext(ShoppingCartContext);
  console.log(isOpen);
  const items = Object.values(cart).reduce(
    (sum, { amount }) => sum + amount,
    0
  );
  const total = Object.values(cart).reduce(
    (sum, { price }) => sum * price,
    0
  );
  console.log(total)
  return (
    <>
      <ShoppingCartContainer
        animate={isOpen ? "open" : "closed"}
        variants={shoppingCartAnimation}
        transition={{ duration: 0.25 }}
      >
        <ShoppingCartItem onClick={() => setIsOpen((isOpen) => !isOpen)}>
          {items ? <ShoppingAmount>{items}</ShoppingAmount> : ""}
          <ShoppingCartImage src={shoppingcart} alt="shoppingcart" />
        </ShoppingCartItem>
        <ShoppingCartListContainer
          animate={isOpen ? "open" : "closed"}
          variants={shoppingCartListAnimation}
          transition={{ duration: 0.25 }}
        >
          <ShoppingCartList>
            {Object.values(cart).map((item) => (
              <li key={item.id}>
                {item.name} {item.amount}
              </li>
            ))}
          </ShoppingCartList>
          <p>Total:{total}</p>
          <button onClick={() => setIsOpen((isOpen) => !isOpen)}>Ga terug</button>
        </ShoppingCartListContainer>
      </ShoppingCartContainer>
    </>
  );
};

export default ShoppingCart;
