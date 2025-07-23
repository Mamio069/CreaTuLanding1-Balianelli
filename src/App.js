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
          <Route
            path="CreaTuLanding1-Balianelli/camperas"
            element={<Camperas />}
          />
          <Route
            path="CreaTuLanding1-Balianelli/pantalones"
            element={<Pantalones />}
          />
          <Route
            path="CreaTuLanding1-Balianelli/zapatillas"
            element={<Zapatillas />}
          />
          <Route
            path="CreaTuLanding1-Balianelli/remeras"
            element={<Remeras />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
