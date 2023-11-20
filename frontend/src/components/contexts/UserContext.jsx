import { createContext, useContext, useEffect, useState } from "react"
import { instance } from "../Axios"

export const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [userDatas, setUserDatas] = useState([])

  const fetchUserDatas = () => {
    instance
      .get("/userId")
      .then((response) => {
        const userData = response.data
        setUserDatas(userData)
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données utilisateur:",
          error
        )
      })
  }

  useEffect(() => {
    fetchUserDatas()
  }, [])

  return (
    <UserContext.Provider value={{ userDatas, fetchUserDatas }}>
      {children}
    </UserContext.Provider>
  )
}
