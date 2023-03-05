import React from 'react';
import classes from './PurchaseInfo.module.css';
import PurchaseCount from '../PurchaseCount/PurchaseCount.jsx'
import ProductPrice from '../ProductPrice/ProductPrice';
export default function PurchaseInfo({number, price}) {
  return (
    <section className={classes.purchaseInfo}>
      <div className={classes.purchaseTooltip}>
        <h2>총 상품 금액</h2>
        <span className={classes.a11y}>도움말</span>
        <div>
          <button className={classes.tooltip} aria-hidden="true">
          ?
            <span className={classes.tooltiptext}>
            총 상품금액에 <span className={classes.bluetext}>배송비는 포함되어 있지 않습니다.<br></br></span>결제시 배송비가 추가될
            수 있습니다.
            </span> 
          </button>
        </div>
      </div>
      <div className={classes.userPurchaseInfo}>
        <h3 className={classes.userPurchaseCount}>총 수량 {number}개</h3>
        <span className={classes.divLineSmall} aria-hidden="true">
          |
        </span>
        {/* .toLocaleString() 숫자를 언어별로 표현(arabic 등). 기본은 미국. */}
        <h3 className={classes.userPurchasePrice}>{price.toLocaleString()}원</h3>
      </div>
    </section>
  );
}