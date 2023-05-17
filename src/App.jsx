import { useEffect, useState } from 'react'
import Card from './components/Card/Card'
import Drawer from './components/Drawer'
import Header from './components/Header'

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [isCartOpened, setIsCartOpened] = useState(false)

  useEffect(() => {
    fetch('https://6464a082127ad0b8f8a37ec2.mockapi.io/items')
      .then((res) => res.json())
      .then(setItems)
  }, [])

  function toggleAddToCartHandler(item) {
    if (cartItems.includes(item)) {
      setCartItems((prev) => prev.filter((i) => i !== item))
    } else {
      setCartItems((prev) => [...prev, item])
    }
  }

  return (
    <div className="wrapper clear">
      {isCartOpened && (
        <Drawer cartItems={cartItems} onClose={() => setIsCartOpened(false)} />
      )}
      <Header onClickCart={() => setIsCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/icons/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="items">
          {items.map((item, i) => (
            <Card
              key={i}
              {...item}
              onToggleAddToCart={() => toggleAddToCartHandler(item)}
              onFavorite={() => console.log('Added to favorites')}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
