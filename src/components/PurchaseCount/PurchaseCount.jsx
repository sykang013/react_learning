//리액트에서 상태변수 추가
import React, {useState} from 'react';
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

  return (
    <section className={classes.purchaseCount}>
      <button onClick={minusButton} type="button" className={classes.minusButton}>-</button>
      <span className={classes.countState}>{number}</span>
      <button onClick={plusButton} type="button" className={classes.plusButton}>
        +
      </button>
    </section>
  );
}

