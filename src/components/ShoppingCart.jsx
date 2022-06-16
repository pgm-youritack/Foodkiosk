import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../App";
import styled from "styled-components";
import { ROUTES } from "../constants/routes";
import shoppingcart from "../assets/images/shopping_cart.png";
import { motion } from "framer-motion";
import { RiArrowGoBackFill } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";
const ShoppingCartContainer = styled(motion.div)`
  display: flex;
  position: absolute;
  width: 98vw;
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
const ShoppingCartButton = styled.div`
box-shadow:2px -0px 8px 4px grey;
  font-size: 50px;
  background-color:lightgrey;
  border-radius: 50%;
  position: relative;
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
box-shadow:2px 0px 8px 4px grey;
  width: 100%;
  border-radius: 25px;
  background-color:lightgrey;
  margin-bottom: 0rem;
`;
const ShoppingCartList = styled(motion.ul)`

  padding: 5rem 0rem 0rem 5rem;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;
    a{
      text-decoration:none;
      color:white;
      background-color:red;
      font-size:60px;
      padding:2rem;
      border-radius:50px;
      box-shadow:2px 0px 8px 4px grey;
      
    }
`;
const ShoppingCartItem = styled.li`
font-size:40px;
  list-style:none;
  display:flex;
  flex:direction:column;
  justify-content:space-between;
  padding-right:5rem;
  text-align:center;
  align-items:center;
  border-collapse:separate;
    .Name{
      width:35rem;
      text-align:left;
    }
    .Delete{
      color:red;
      :hover{
        transform:scale(1.5);
      }
    }
`;
const TotalPrice= styled.p`
    margin-bottom:5rem;
  font-size:40px;
`
//animations
const shoppingCartAnimation = {
  open: { y: -1500 },
  closed: { y: 0 },
};
const shoppingcartContainerAnimation = {
  open: { height: "100rem" },
  closed: { height: "1rem" },
};
const shoppingCartListAnimation = {
  open: { display: "block" },
  closed: { display: "none" },
};
const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useContext(ShoppingCartContext);
  const items = Object.values(cart).reduce(
    (sum, { amount }) => sum + amount,
    0
  );
  const total = Object.values(cart).reduce(
    (sum, { price, amount }) => sum + price * amount,
    0
  );
const totalItem=(itemAmount,itemPrice)=>{
  return itemAmount*itemPrice;
}
const DeleteItem=(itemId)=>{
  console.log('test');
  let updatedCart;

    delete cart[itemId];

    updatedCart = {
      ...cart,
    };
    setCart(updatedCart);
  }




  return (
    <>
      <ShoppingCartContainer
        animate={isOpen ? "open" : "closed"}
        variants={shoppingCartAnimation}
        transition={{ duration: 0.25 }}
      >
        <ShoppingCartButton onClick={() => setIsOpen((isOpen) => !isOpen)}>
          {isOpen ? (
            <RiArrowGoBackFill />
          ) : (
            <div>
              {items ? <ShoppingAmount>{items}</ShoppingAmount> : ""}
              <ShoppingCartImage src={shoppingcart} alt="shoppingcart" />
            </div>
          )}
        </ShoppingCartButton>
        <ShoppingCartListContainer
          animate={isOpen ? "open" : "closed"}
          variants={shoppingcartContainerAnimation}
          transition={{ duration: 0.25 }}
        >
          <ShoppingCartList
            animate={isOpen ? "open" : "closed"}
            variants={shoppingCartListAnimation}
            transition={{ duration: 0.25 }}
          >
            {Object.values(cart).map((item) => (
              <ShoppingCartItem key={item.id}>
                <p className="Name">{item.name}</p>{" "}
                <p className="Amount">{item.amount}X</p>
                <p className="Price">{totalItem(item.amount,item.price)}€</p>
               <BsTrash className="Delete" onClick={()=>DeleteItem(item.id)} />
              </ShoppingCartItem>
            ))}
            <TotalPrice>Totaal: €{total}</TotalPrice>
            <Link to={ROUTES.PAYMENT}>
            Leveren
          </Link>
          </ShoppingCartList>
        </ShoppingCartListContainer>
      </ShoppingCartContainer>
    </>
  );
};

export default ShoppingCart;
