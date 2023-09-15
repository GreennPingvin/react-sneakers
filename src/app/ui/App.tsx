import { sneakers } from "app/data/sneakers";
import { Card } from "entities/Card";
import { Cart } from "entities/Cart/Cart";
import { useItemsInCart } from "shared/hooks/useItemsInCart";
import { Header } from "widgets/Header";
import { Sneaker } from "../data/types";

const App = () => {
  const { itemsAddedToCart, addToCart, removeFromCart } = useItemsInCart();

  const onToggleAddToCartCLick = (sneaker: Sneaker) => {
    if (itemsAddedToCart.includes(sneaker)) {
      removeFromCart(sneaker);
    } else {
      addToCart(sneaker);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <Header />
        <main className="content">
          <div className="title-wrapper">
            <h1 className="title content__title">Все кроссовки</h1>
            <div className="search">
              <img
                width="14"
                height="14"
                src="/icons/search.svg"
                alt="Иконка поиска"
              />
              <input
                className="search__input"
                type="text"
                placeholder="Поиск..."
              />
            </div>
          </div>
          <div className="sneakers">
            {sneakers.map((sneaker) => (
              <Card
                key={sneaker.id}
                item={sneaker}
                onTogglePlusClick={() => onToggleAddToCartCLick(sneaker)}
              />
            ))}
          </div>
        </main>
      </div>
      <Cart />
    </div>
  );
};

export default App;
