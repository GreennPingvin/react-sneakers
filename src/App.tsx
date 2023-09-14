import { Card } from "entities/Card";
import { Cart } from "entities/Cart/Cart";
import { Header } from "widgets/Header";

const App = () => {
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
            {[...new Array(4)].map((el, i) => (
              <Card
                key={i}
                imgSrc={`/img/sneakers/sneakers-${i + 1}.jpg`}
                title="Мужские Кроссовки Nike Blazer Mid Suede"
                price={12999}
              />
            ))}
          </div>
        </main>
      </div>
      {/*<Cart />*/}
    </div>
  );
};

export default App;
