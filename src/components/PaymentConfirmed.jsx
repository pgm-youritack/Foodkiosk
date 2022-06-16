import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {IoIosCheckmarkCircleOutline} from "react-icons/io"
import styled from "styled-components";

const PaymentCheck=styled(motion.div)`
display:flex;
flex-direction:column;
align-items:center;
color:#00FF00;
font-size:50px;
    .checkmark{ font-size:200px;}
   
`
const boxVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const PaymentConfirmed = () => {
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
    <PaymentCheck
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
        <IoIosCheckmarkCircleOutline className="checkmark"/>
      Betaling goedgekeurd
    </PaymentCheck>
  );
};

export default PaymentConfirmed;
