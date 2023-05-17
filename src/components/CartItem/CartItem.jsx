import React from 'react'

import styles from './CartItem.module.scss'

const CartItem = (props) => {
  return (
    <div className={styles.cartItem}>
      <div
        className={styles.cartItemImg}
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      ></div>
      <div className="flex mr-20 ">
        <p className="mb-5">{props.title}</p>
        <b>{props.price} руб.</b>
      </div>
      <img
        className={styles.removeBtn}
        src="/icons/btn_remove.svg"
        alt="Remove"
      />
    </div>
  )
}

export default CartItem
