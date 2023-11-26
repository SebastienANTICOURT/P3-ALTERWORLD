import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import "./Style.scss"
import { getUsers, instance } from "./components/Axios"
import NavBar from "./components/NavBar"
import { useAuthContext } from "./components/contexts/AuthContext"
import Order from "./pages//order/Order"
import Basket from "./pages/Basket"
import Contact from "./pages/Contact"
import Membre from "./pages/Membre"
import NonMembre from "./pages/NonMembre"
import Administrator from "./pages/administrator/Administrator"
import CustomerArea from "./pages/customerArea/CustomerArea"
import Details from "./pages/details/Details"
import Home from "./pages/home/Home"

function App() {
  const [users, setUsers] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)
  const { userLog } = useAuthContext()

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data)
    })
  }, [])

  useEffect(() => {
    instance
      .get("/Admin")
      .then(() => {
        setIsAdmin(true)
      })
      .catch((error) => {
        console.error("L'utilisateur n'est pas admin", error)
        setIsAdmin(false)
      })
  }, [userLog.firstName])

  return (
    <div className="App">
      <NavBar isAdmin={isAdmin} />
      <Routes>
        <Route path="/" element={<Home userLog={userLog} />} />
        <Route path="/membre" element={<Membre />} />
        <Route path="/nonMembre" element={<NonMembre users={users} />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/basket" element={<Basket />} />
        <Route
          path="/order"
          element={<Order users={users} userLog={userLog} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customerArea" element={<CustomerArea />} />
        {isAdmin ? (
          <Route
            path="/administrator"
            element={<Administrator users={users} />}
          />
        ) : (
          ""
        )}
      </Routes>
    </div>
  )
}

export default App
