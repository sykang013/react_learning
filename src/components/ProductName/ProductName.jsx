import React from 'react';
import classes from './ProductName.module.css';
import productImg from '../../assets/productImg_Rapigen_1x.png'
import productImg2 from '../../assets/testImg.png'

export default function ProductName() {
  const name = '래피젠 코로나 자가 검사 키트 2개입X1박스';

  return (
    <>
      <div className={classes.productImageContainer}>
        <img className={classes.productImage}
        src={productImg2}
        alt="래피젠 코로나 자가 검사 키트 상품 이미지"
        />
      </div>
      <h1 className={classes.productInfo}>래피젠 코로나 자가 검사 키트<br></br> 2개입X1박스</h1>
    </>
  );
}
