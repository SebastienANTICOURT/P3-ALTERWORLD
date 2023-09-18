import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import NavBar from "./components/NavBar"
import Home from "./pages/home/Home"
import Connexion from "./pages/connexion/Connexion"
import Details from "./pages/details/Details"
import Basket from "./pages/Basket"
import Order from "./pages/Order"
import Administrator from "./pages/Administrator"
import "./Style.scss"

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/connexion" element={<Connexion setUser={setUser} />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/order" element={<Order />} />
        <Route path="/administrator" element={<Administrator />} />
      </Routes>
    </div>
  )
}

export default App
