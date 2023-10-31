import axios from "axios"

export async function getBasket() {
  try {
    const res = await axios.get("http://localhost:4242/basket")
    return res.data
  } catch (error) {
    console.error("Error fetching basket:", error)
    throw error
  }
}

export async function getOrders() {
  try {
    const res = await axios.get("http://localhost:4242/orders")
    return res.data
  } catch (error) {
    console.error("Error fetching orders:", error)
    throw error
  }
}

export async function getUsers() {
  try {
    const res = await axios.get("http://localhost:4242/users")
    return res.data
  } catch (error) {
    console.error("Error fetching orders:", error)
    throw error
  }
}

export async function getProducts() {
  try {
    const res = await axios.get("http://localhost:4242/products")
    return res.data
  } catch (error) {
    console.error("Error fetching orders:", error)
    throw error
  }
}

export async function getUnivers() {
  try {
    const res = await axios.get("http://localhost:4242/univers")
    return res.data
  } catch (error) {
    console.error("Error fetching orders:", error)
    throw error
  }
}

export async function getTypes() {
  try {
    const res = await axios.get("http://localhost:4242/types")
    return res.data
  } catch (error) {
    console.error("Error fetching orders:", error)
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
