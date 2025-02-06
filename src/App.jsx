import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Nav from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as bootstrap from "bootstrap";
import { CartContextProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer";
import { exportProductsToDB } from "./data/database";
function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="Fragancias" />}
        />
        <Route
          path="/destacado/:catid"
          element={<ItemListContainer greeting="Compras por categoría" />}
        />
        <Route
          path="/productM/:catid"
          element={<ItemListContainer greeting="Compras por categoría" />}
        />
        <Route
          path="/productF/:catid"
          element={<ItemListContainer greeting="Compras por categoría" />}
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
      </Routes>

    </BrowserRouter>  
    </CartContextProvider>
  );
}

export default App;
