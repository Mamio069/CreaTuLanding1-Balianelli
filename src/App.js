import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Camperas from "./components/Camperas";
import Pantalones from "./components/Pantalones";
import Zapatillas from "./components/Zapatillas";
import Remeras from "./components/Remeras";
import Footer from "./components/Footer";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

const Router =
  process.env.NODE_ENV === "production" ? HashRouter : BrowserRouter;

function App() {
  const mensaje = "¡Bienvenido a nuestra tienda de ropa urbana!";

  return (
    <Router>
      <div className="App">
        <NavBar />
        <ItemListContainer mensaje={mensaje} />
        <Routes>
          <Route path="/camperas" element={<Camperas />} />
          <Route path="/pantalones" element={<Pantalones />} />
          <Route path="/zapatillas" element={<Zapatillas />} />
          <Route path="/remeras" element={<Remeras />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
