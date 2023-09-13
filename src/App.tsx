import React from "react";

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="header__left">
          <div className="logo">
            <img width="40" height="40" src="/icons/logo.svg" alt="Логотип" />
          </div>
          <div className="header__info">
            <h3 className="header__text">React Sneakers</h3>
            <div className="header__desc">Магазин лучших кроссовок</div>
          </div>
        </div>
        <ul className="header__right">
          <li className="header__cart">
            <img width="18" height="18" src="/icons/cart.svg" alt="" />
            <div className="header__cart-sum">1205 руб.</div>
          </li>
          <li>
            <img width="18" height="18" src="/icons/favorites.svg" alt="" />
          </li>
          <li>
            <img width="18" height="18" src="/icons/user.svg" alt="" />
          </li>
        </ul>
      </header>
      <main className="content">
        <h1 className="title content__title">Все кроссовки</h1>
        <div className="sneakers">
          <div className="card">
            <div className="card__img">
              <img
                src="/img/sneakers/sneakers-1.jpg"
                alt="Картинка кроссовок"
              />
              <button className="card__fav-btn">
                <img src="/icons/heart-unliked.svg" alt="" />
              </button>
            </div>
            <div className="card__title">
              Мужские Кроссовки Nike Blazer Mid Suede
            </div>
            <div className="card__bottom">
              <div className="card__price-info">
                <div className="card__price-label">цена:</div>
                <div className="card__price">12999 руб.</div>
              </div>
              <button className="card__add-btn">
                <img src="/icons/add-btn.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
