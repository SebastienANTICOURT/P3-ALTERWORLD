import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Boutique from "./pages/Boutique"
import Details from "./pages/Details"
import Panier from "./pages/Panier"
import Footer from "./components/Footer"
import "./Style.scss"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
