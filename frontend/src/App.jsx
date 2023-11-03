import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import "./Style.scss"
import { useAuthContext } from "./components/AuthContext"
import { getOrders, getUsers } from "./components/Axios"
import NavBar from "./components/NavBar"
import Order from "./pages//order/Order"
import Basket from "./pages/Basket"
import Contact from "./pages/Contact"
import Administrator from "./pages/administrator/Administrator"
import Connexion from "./pages/connexion/Connexion"
import CustomerArea from "./pages/customerArea/CustomerArea"
import Details from "./pages/details/Details"
import Home from "./pages/home/Home"

function App() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)
  const [ordersData, setOrdersData] = useState([])
  const { userLog } = useAuthContext()

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data)
    })
  }, [])

  useEffect(() => {
    getOrders().then((data) => {
      setOrdersData(data[0])
    })
  }, [])

  const admin = ordersData.find(
    (order) => order && order.usersId === Number(userLog?.usersId)
  )

  return (
    <div className="App">
      <NavBar admin={admin} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route
          path="/connexion"
          element={<Connexion setUser={setUser} users={users} />}
        />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/order" element={<Order users={users} user={user} />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/customerArea"
          element={<CustomerArea ordersData={ordersData} />}
        />
        {admin && admin.isAdministrator === 1 ? (
          <Route
            path="/administrator"
            element={<Administrator ordersData={ordersData} users={users} />}
          />
        ) : null}
      </Routes>
    </div>
  )
}

export default App
