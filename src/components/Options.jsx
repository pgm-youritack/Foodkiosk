import React from 'react'
import styles from 'styled-components';

const CategoryTitle = styles.h1`
font-family:'Arial';
font-size:120px;
`
const Options = ({options}) => {
  return (
    <CategoryTitle>{options}</CategoryTitle>
  )
}

export default Options