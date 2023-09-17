import { Card } from "entities/Card";
import { Cart } from "entities/Cart";
import { ChangeEvent, useState } from "react";
import { useFilteredItems } from "shared/hooks/useFilteredItems";
import { useItemsInCart } from "shared/hooks/useItemsInCart";
import { Header } from "widgets/Header";
import { SearchInput } from "widgets/SearchInput";
import { Sneaker } from "../data/types";

const App = () => {
  const { addToCart, removeFromCart, isItemInCart } = useItemsInCart();
  const { filteredItems, filterItems } = useFilteredItems();
  const [searchString, setSearchString] = useState("");

  const onToggleAddToCartCLick = (sneaker: Sneaker) => {
    if (isItemInCart(sneaker)) {
      removeFromCart(sneaker);
    } else {
      addToCart(sneaker);
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchString = e.target.value;
    setSearchString(newSearchString);
    filterItems(newSearchString);
  };

  return (
    <div className="app">
      <div className="container">
        <Header />
        <main className="content">
          <div className="title-wrapper">
            <h1 className="title content__title">Все кроссовки</h1>
            <SearchInput value={searchString} onChange={onInputChange} />
          </div>
          <div className="sneakers">
            {filteredItems.map((sneaker) => (
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
