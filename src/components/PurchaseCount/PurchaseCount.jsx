//리액트에서 상태변수 useState 추가
import React, {useState} from 'react';
import DivLine from '../DivLine/DivLine';
import PurchaseInfo from '../PurchaseInfo/PurchaseInfo';
import PurchaseButton from '../PurchaseButton/PurchaseButton';
import classes from './PurchaseCount.module.css';

export default function PurchaseCount() {
  //리액트 훅인 useState의 문법이다. const [sate, setState] = useState(initialState) const도 관례. 
  const [number, setNumber] = useState(1); 
  const plusButton = () => {
    setNumber(number + 1);
  }
  //number가 0이면, return으로 문을 빠져나온다.
  const minusButton = () =>{
    if(number === 0){
      return;
    } else(
      setNumber(number - 1)
    )
  }
  //데이터로 price도 받아오기
  let price = 6370 * number;

  return (
    <>
      <section className={classes.purchaseCount}>
        <button onClick={minusButton} type="button" className={classes.minusButton}>-</button>
        <span className={classes.countState}>{number}</span>
        <button onClick={plusButton} type="button" className={classes.plusButton}>
          +
      </button>
    </section>
    <DivLine />
    {/* 이렇게 PurchaseInfo의 인자를 지정해줄 수 있다. */}
    <PurchaseInfo number={number} price={price} />
    <PurchaseButton number={number}/>
    </>
  );
}


