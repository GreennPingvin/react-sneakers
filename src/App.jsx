import Card from './components/Card'
import Drawer from './components/Drawer'
import Header from './components/Header'

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/icons/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex justify-between">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default App
