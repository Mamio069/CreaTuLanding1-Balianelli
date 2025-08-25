import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Camperas from "./components/Camperas";
import Pantalones from "./components/Pantalones";
import Zapatillas from "./components/Zapatillas";
import Remeras from "./components/Remeras";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound"; // pagina 404
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

const Router =
  process.env.NODE_ENV === "production" ? HashRouter : BrowserRouter;

function App() {
  const mensaje = "¡Bienvenido a nuestra tienda de ropa urbana!";

  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          {/* Ruta Home */}
          <Route path="/" element={<ItemListContainer mensaje={mensaje} />} />

          {/* Rutas de productos */}
          <Route path="/camperas" element={<Camperas />} />
          <Route path="/pantalones" element={<Pantalones />} />
          <Route path="/zapatillas" element={<Zapatillas />} />
          <Route path="/remeras" element={<Remeras />} />

          {/* Ruta 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
