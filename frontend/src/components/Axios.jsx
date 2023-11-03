import axios from "axios"

// GET
const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
})

export async function getBasket() {
  try {
    const res = await instance.get("/basket")
    return res.data
  } catch (error) {
    console.error("Error fetching basket:", error)
    throw error
  }
}

export async function getOrders() {
  try {
    const res = await instance.get("/orders")
    return res.data
  } catch (error) {
    console.error("Error fetching orders:", error)
    throw error
  }
}

export async function getUsers() {
  try {
    const res = await instance.get("/users")
    return res.data
  } catch (error) {
    console.error("Error fetching orders:", error)
    throw error
  }
}

export async function getProducts() {
  try {
    const res = await instance.get("/products")
    return res.data
  } catch (error) {
    console.error("Error fetching orders:", error)
    throw error
  }
}

export async function getUnivers() {
  try {
    const res = await instance.get("/univers")
    return res.data
  } catch (error) {
    console.error("Error fetching orders:", error)
    throw error
  }
}

export async function getTypes() {
  try {
    const res = await instance.get("/types")
    return res.data
  } catch (error) {
    console.error("Error fetching orders:", error)
    throw error
  }
}

export async function Logout() {
  try {
    const res = await instance.get("/logout")
    return res.data
  } catch (error) {
    console.error("Error fetching orders:", error)
    throw error
  }
}

// POST
export async function login(email, password) {
  try {
    const response = await instance.post("/login", { email, password })
    return response.data
  } catch (error) {
    console.error("Error during login:", error)
    throw error
  }
}

// DELETE
export async function deleteUserById(userId) {
  try {
    const res = await axios.delete(`http://localhost:4242/users/${userId}`)
    return res.data
  } catch (error) {
    console.error(`Error deleting user with ID ${userId}:`, error)
    throw error
  }
}
