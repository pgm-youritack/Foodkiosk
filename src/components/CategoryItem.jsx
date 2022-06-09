import React,{useEffect} from "react";
import { useInView } from "react-intersection-observer";
import styles from "styled-components";
import { motion,useAnimation } from "framer-motion";
const ListItem = styles(motion.li)`
  margin-top:3rem;
  width:236px;
  height:241px;
  text-decoration:none;
  list-style:none;
  margin-bottom:5rem;
  font-size:45px;
`;
const Image = styles.img`
  width:180px;
  height:180px;
  border-radius:100px;
`;
const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

const CategoryItem = ({ item, onClick }) => {
  const control = useAnimation()
const [ref, inView] = useInView()

useEffect(() => {
  if (inView) {
    control.start("visible");
  } else {
    control.start("hidden");
  }
}, [control, inView]);


  const img = require(`../assets/images/categories/${item.name}.png`);
  return (
    <>
      <ListItem
        onClick={() => onClick(item.name)}
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <Image src={img} alt={item.name} />
        {item.name}
      </ListItem>
    </>
  );
};

export default CategoryItem;
