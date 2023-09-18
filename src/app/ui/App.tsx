import { Card } from "entities/Card";
import { Cart } from "entities/Cart";
import { ChangeEvent, useState } from "react";
import { useItems } from "shared/hooks/useItems";
import { Header } from "widgets/Header";
import { SearchInput } from "widgets/SearchInput";

const App = () => {
  const { items, filterItems } = useItems();
  const [searchString, setSearchString] = useState("");

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
            {items.map((sneaker) => (
              <Card key={sneaker.id} item={sneaker} />
            ))}
          </div>
        </main>
      </div>
      <Cart />
    </div>
  );
};

export default App;
