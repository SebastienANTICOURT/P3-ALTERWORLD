import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { AuthProvider } from "./components/contexts/AuthContext"
import { BasketProvider } from "./components/contexts/BasketContext"
import { OrdersProvider } from "./components/contexts/OrdersContext"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BasketProvider>
          <OrdersProvider>
            <App />
          </OrdersProvider>
        </BasketProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
