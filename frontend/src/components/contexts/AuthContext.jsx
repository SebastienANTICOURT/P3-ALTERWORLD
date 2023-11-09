import Cookies from "js-cookie"
import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [userLog, setUserLog] = useState({
    usersId: parseInt(Cookies.get("usersId")) || null,
    // token: Cookies.get("token") || null,
    firstName: Cookies.get("firstName") || null,
  })

  useEffect(() => {
    setUserLog({
      usersId: parseInt(Cookies.get("usersId")) || null,
      // token: Cookies.get("token") || null,
      firstName: Cookies.get("firstName") || null,
    })
  }, [Cookies.get("usersId"), Cookies.get("firstName")])

  return (
    <AuthContext.Provider value={{ userLog, setUserLog }}>
      {children}
    </AuthContext.Provider>
  )
}
