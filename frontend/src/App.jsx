import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
// importer les pages en lazy loading pour se la raconter
// interet : diminuer l'attente du client avant la premiere impression
import Home from "./pages/home/Home"
import Connexion from "./pages/connexion/Connexion"
import Boutique from "./pages/boutique/Boutique"
import Details from "./pages/details/Details"
import Basket from "./pages/basket/Basket"
import "./Style.scss"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  )
}

export default App
