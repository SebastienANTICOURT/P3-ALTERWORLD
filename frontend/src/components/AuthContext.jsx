import Cookies from "js-cookie"
import { createContext, useContext, useEffect, useState } from "react"

const CurrentUserContext = createContext()

export const useAuthContext = () => useContext(CurrentUserContext)

export const CurrentUserContextProvider = ({ children }) => {
  const [userLog, setUserLog] = useState({
    usersId: parseInt(Cookies.get("usersId")) || null,
    token: Cookies.get("token") || null,
  })

  useEffect(() => {
    setUserLog({
      usersId: parseInt(Cookies.get("usersId")) || null,
      token: Cookies.get("token") || null,
    })
  }, [Cookies.get("usersId"), Cookies.get("token")])

  return (
    <CurrentUserContext.Provider value={{ userLog, setUserLog }}>
      {children}
    </CurrentUserContext.Provider>
  )
}
