import { motion, useAnimation } from "framer-motion";
import React, { useState, useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { ShoppingCartContext } from "../App";
const Modalcomponent = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;
const ModalContent = styled(motion.div)`
  border-radius: 25px;
  background-color: #fefefe;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 50% auto;
  border: 1px solid #888;
  width: 979px;
  padding-bottom: 2rem;
`;
const Modalimage = styled.img`
  border-radius: 25px 25px 0px 0px;
  margin: 0px;
  width: 979px;
  height: 400px;
`;
const Ingredients = styled.div`
align-items:center;
text-align:center;
  flex-wrap:wrap;
  display:flex;
  width:30rem;
`
const Ingredient = styled.p`
  margin-left: 1rem;
  font-size: 30px;
`;
const AmountCont = styled.div`
  display: flex;
  flex-direction: row;
`;
const Increase = styled.button`
  background-color: green;
  border-radius: 0px 25px 25px 0px;
  color: white;
  border: none;
  height: 50px;
  width: 50px;
  font-size: 40px;
`;
const Decrease = styled.button`
  border-radius: 25px 0px 0px 25px;
  background-color: red;
  color: white;
  border: none;
  height: 50px;
  width: 50px;
  font-size: 40px;
`;
const AmountInput = styled.input`
border solid 1px lightgrey;
width:100px;
font-size:30px;
text-align:center;
`;
const Button = styled.button`
  border-radius: 40px;
  border: solid 2px red;
  background-color: white;
  color: red;
  font-size: 40px;
  padding: 1rem;
  &:active {
    background-color: red;
    color: white;
    transform: scale(0.8);
  }
`;
const ProductName = styled.h1`
font-size:50px`
const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};
const Modal = ({ show, close, item, image, defaultAmount = 0 }) => {
  const ingredients = item.content;
  const [cart, setCart] = useContext(ShoppingCartContext);
  const [amount, setAmount] = useState(
    cart[item.id] ? cart[item.id].amount : defaultAmount
  );

  const setCartContext = (val) => {
    let updatedCart;

    setAmount(val);

    if (val) {
      updatedCart = {
        ...cart,
        [item.id]: { ...item, amount: val },
      };
    } else {
      delete cart[item.id];

      updatedCart = {
        ...cart,
      };
    }
    setCart(updatedCart);
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      {show ? (
        <Modalcomponent>
          <ModalContent
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
          >
            <Modalimage src={image} alt={item.name} />
            <ProductName>{item.name}</ProductName>
            <h1>Inhoud</h1>

            {ingredients ?<Ingredients>
              {ingredients.map((ingredient) => (
                <Ingredient>{ingredient},</Ingredient>
              ))}
            </Ingredients>:" "}
            

            <AmountCont>
              <Decrease onClick={() => setCartContext(parseInt(amount) - 1)}>
                -
              </Decrease>
              <AmountInput
                onChange={(e) => setCartContext(e.target.valule)}
                value={amount}
                readOnly
              ></AmountInput>
              <Increase onClick={() => setCartContext(parseInt(amount) + 1)}>
                +
              </Increase>
            </AmountCont>
            <Button onClick={() => close()}>keer terug</Button>
          </ModalContent>
        </Modalcomponent>
      ) : null}
    </>
  );
};

export default Modal;
