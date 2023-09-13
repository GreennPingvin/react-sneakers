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
    </div>
  );
};

export default App;
