import { motion, useAnimation } from "framer-motion";
import React, { useState, useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import CircleLoader from "../components/CircleLoader";
import styled from "styled-components";
import PaymentConfirmed from "../components/PaymentConfirmed";
import Payconiq from "../assets/images/payconiq_logo.svg";
const PaymentBox = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  align-text: center;
  justify-content: center;
`;
const PaymentButton = styled.button`
justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffefea;
  padding: 3rem;
  margin: 1rem;
  text-decoration: none;
  color: #000000;
  width:408px;
  border: 2px red solid;
  box-shadow: 2px 0px 8px 4px grey;
  font-size: 50px;
  border-radius: 25px;
  transition: transform 0.2s ease;
  transform: scale(1);
    .Card{
        font-size:150px;

    }


  img {
    width: 275px;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    background-color: red;
  }
`;
const Buttons=styled.div`
margin-top:5rem;
display:flex;
justify-content:space-between;
`
const boxVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const Payment = () => {
  const [confirmPayment, setConfirmPayment] = useState(false);
  const [paymentFinished, setPaymentFinished] = useState(false);

  const paymentConfirm = () => {
    setConfirmPayment(!confirmPayment);

    setTimeout(() => {
      setPaymentFinished(!paymentFinished);
    }, 5000);
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
    <PaymentBox>
      {!confirmPayment ? (
        <Buttons>
          <PaymentButton onClick={() => paymentConfirm()}>
            <img src={Payconiq} alt="payconiq"></img> payconiq
          </PaymentButton>
          <PaymentButton onClick={() => paymentConfirm()}>
            <BsFillCreditCard2BackFill className="Card"/> payconiq
          </PaymentButton>
        </Buttons>
      ) : !paymentFinished ? (
        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          <CircleLoader></CircleLoader>
        </motion.div>
      ) : (
        <PaymentConfirmed />
      )}
    </PaymentBox>
  );
};

export default Payment;
