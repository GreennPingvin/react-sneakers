import { CartWindow } from "entities/cart/CartWindow";
import { FavoritesPage } from "pages/FavoritesPage";
import { HomePage } from "pages/HomePage";
import { ProfilePage } from "pages/ProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "widgets/Header";

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
      <CartWindow />
    </>
  );
};

export default App;
