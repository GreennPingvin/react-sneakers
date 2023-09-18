import { Cart } from "entities/Cart";
import { HomePage } from "pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "widgets/Header";
import { FavoritesPage } from "pages/FavoritesPage";
import { ProfilePage } from "pages/ProfilePage";

const App = () => {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Header />
          <main className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
      <Cart />
    </>
  );
};

export default App;
