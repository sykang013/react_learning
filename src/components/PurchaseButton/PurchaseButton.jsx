import React from 'react';
import classes from './PurchaseButton.module.css';

export default function PurchaseButton({number}) {
  return (
    <div>
      <button disabled={!number} type="button" className={classes.button}>
        <div className={classes.logoForButton}>
        </div>
        구매하기
      </button>
    </div>
  );
}
