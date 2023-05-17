import React from 'react'
import CartItem from './CartItem/CartItem'

const Drawer = ({ cartItems = [], ...props }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            className="removeBtn cu-p"
            src="/icons/btn_remove.svg"
            alt="Close"
            onClick={props.onClose}
          />
        </h2>
        <div className="cartItems flex">
          {cartItems.map((cartItem, i) => (
            <CartItem key={i} {...cartItem} />
          ))}
        </div>
        <ul className="cartTotalBlock">
          <li>
            <span>Итого:</span>
            <div></div>
            <b>21 498 руб. </b>
          </li>
          <li>
            <span>Налог 5%: </span>
            <div></div>
            <b>1074 руб. </b>
          </li>
        </ul>
        <button className="greenBtn">
          Оформить заказ
          <img src="/icons/arrow.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Drawer
