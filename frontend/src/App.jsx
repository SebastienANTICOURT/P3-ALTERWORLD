import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import NavBar from "./components/NavBar"
import Home from "./pages/home/Home"
import Connexion from "./pages/connexion/Connexion"
import Details from "./pages/details/Details"
import Basket from "./pages/Basket"
import Order from "./pages/Order"
import Contact from "./pages/Contact"
import Administrator from "./pages/administrator/Administrator"
import "./Style.scss"

function App() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:4242/users").then((res) => setUsers(res.data))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route
          path="/connexion"
          element={<Connexion setUser={setUser} users={users} />}
        />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/order" element={<Order users={users} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/administrator" element={<Administrator />} />
      </Routes>
    </div>
  )
}

export default App
