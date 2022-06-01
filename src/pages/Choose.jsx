import React from "react";
import { Link } from "react-router-dom";
import styles from "styled-components";
import { ROUTES } from "../constants/routes";
import TakeOut from "../assets/images/fast-dlivery.svg";
import Delivery from "../assets/images/food-delivery.svg";
import Pita from "../assets/images/pita.png";

const Center = styles.div`
  display:flex;
  flex-direction:column;
  gap:5rem;
  align-items:center;
`;

const NavButtons = styles.div`
    margin-top:5rem;
    display:flex;
    gap:15rem;

    a {
      display: flex;
      flex-direction:column;
      align-items: center;
      background-Color:#FF7F7F;
      padding:3rem;
      margin:1rem;
      text-decoration:none;
      color:white;
      width:252px;
      border:2px red solid;
      box-shadow:2px 0px 8px 4px grey;
      font-size:30px;
      border-Radius:25px;
      transition: transform .2s ease;
      transform: scale(1.0);
      
    &:hover{
      transform: scale(1.1);
    }

    &:focus{
      background-color:red;
    }
  }
`;

const Image = styles.img`
  filter: invert(100%) sepia(100%) saturate(16%) hue-rotate(200deg) brightness(103%) contrast(101%);
  `;

const Choose = () => {
  return (
    <Center>
      <img src={Pita} alt="PitaLogo" />
      <NavButtons>
        <Link to={ROUTES.KIOSK}>
          <Image src={TakeOut} alt="takeout" />
          Leveren
        </Link>
        <Link to={ROUTES.KIOSK}>
          <Image src={Delivery} alt="Delivery" />
          Ophalen
        </Link>
      </NavButtons>
    </Center>
  );
};

export default Choose;
