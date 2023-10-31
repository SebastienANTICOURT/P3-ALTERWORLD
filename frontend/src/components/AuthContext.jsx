import { createContext, useContext, useState } from "react"

const CurrentUserContext = createContext()

export const useAuthContext = () => useContext(CurrentUserContext)

export const CurrentUserContextProvider = ({ children }) => {
  const [userLog, setUserLog] = useState({
    usersId: parseInt(localStorage.getItem("usersId")),
    token: localStorage.getItem("token"),
  })

  // console.log("userLog", userLog)
  return (
    <CurrentUserContext.Provider value={{ userLog, setUserLog }}>
      {children}
    </CurrentUserContext.Provider>
  )
}
