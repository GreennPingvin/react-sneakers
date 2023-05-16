import React from 'react'

const Card = () => {
  return (
    <div className='card'>
      <div className="favorite">
        <img src="/icons/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src="/img/sneakers/sneakers-1.jpg" alt="" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button>
          <img width={11} height={11} src="/icons/add-btn.svg" alt="plus" />
        </button>
      </div>
    </div>
  )
}

export default Card
