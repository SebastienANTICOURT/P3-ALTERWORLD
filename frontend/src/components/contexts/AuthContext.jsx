import Cookies from "js-cookie"
import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [userLog, setUserLog] = useState({
    firstName: Cookies.get("firstName") || null,
  })

  useEffect(() => {
    setUserLog({
      firstName: Cookies.get("firstName") || null,
    })
  }, [Cookies.get("firstName")])

  return (
    <AuthContext.Provider value={{ userLog, setUserLog }}>
      {children}
    </AuthContext.Provider>
  )
}
