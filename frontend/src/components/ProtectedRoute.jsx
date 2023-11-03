import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoute({ userLog, redirectPath = "/login", children }) {
  if (!userLog) return <Navigate to={redirectPath} replace />

  return children || <Outlet />
}

export default ProtectedRoute
