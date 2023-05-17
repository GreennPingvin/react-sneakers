import React, { useState } from 'react'
import styles from './Card.module.scss'

const Card = (props) => {
  const [isAdded, setIsAdded] = useState(false)

  function toggleAddToCartHandler() {
    props.onToggleAddToCart()
    setIsAdded(!isAdded)
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onFavorite}>
        <img src="/icons/heart_unclicked.svg" alt="Unclicked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button onClick={toggleAddToCartHandler}>
          <img
            src={isAdded ? '/icons/btn_added.svg' : '/icons/btn_add.svg'}
            alt="plus"
          />
        </button>
      </div>
    </div>
  )
}

export default Card
