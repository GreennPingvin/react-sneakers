import React from 'react'

const Drawer = () => {
  return (
    <div className="overlay" style={{ display: 'none' }}>
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            className="removeBtn cu-p"
            src="/icons/btn-remove.svg"
            alt="Remove"
          />
        </h2>
        <div className="items flex">
          <div className="cartItem d-flex align-center mb-20">
            <div
              className="cartItemImg"
              style={{ backgroundImage: 'url(/img/sneakers/sneakers-1.jpg)' }}
            ></div>
            <div className="flex mr-20 ">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/icons/btn-remove.svg"
              alt="Remove"
            />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              className="cartItemImg"
              style={{ backgroundImage: 'url(/img/sneakers/sneakers-1.jpg)' }}
            ></div>
            <div className="flex mr-20 ">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/icons/btn-remove.svg"
              alt="Remove"
            />
          </div>
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
