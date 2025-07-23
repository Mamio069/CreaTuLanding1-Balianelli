import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Camperas from "./components/Camperas";
import Pantalones from "./components/Pantalones";
import Zapatillas from "./components/Zapatillas";
import Remeras from "./components/Remeras";
import Footer from "./components/Footer";

function App() {
  const mensaje = "¡Bienvenido a nuestra tienda de ropa urbana!";

  return (
    <div className="App">
      <ItemListContainer mensaje={mensaje} />
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/camperas" element={<Camperas />} />
          <Route path="/pantalones" element={<Pantalones />} />
          <Route path="/zapatillas" element={<Zapatillas />} />
          <Route path="/remeras" element={<Remeras />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
