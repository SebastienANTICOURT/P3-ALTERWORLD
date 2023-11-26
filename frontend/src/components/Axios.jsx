import axios from "axios"

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
})

// GET
export async function getProducts() {
  try {
    const res = await instance.get("/products")
    return res.data
  } catch (error) {
    console.error("Error axios", error)
    throw error
  }
}

export async function getUsers() {
  try {
    const res = await instance.get("/users")
    return res.data
  } catch (error) {
    console.error("Error axios, getUsers", error)
    throw error
  }
}

export async function getBasket() {
  try {
    const res = await instance.get("/basket")
    return res.data
  } catch (error) {
    console.error("Error axios", error)
    throw error
  }
}

export async function getOrders() {
  try {
    const res = await instance.get("/orders")
    return res.data
  } catch (error) {
    console.error("Error axios", error)
    throw error
  }
}

export async function getUnivers() {
  try {
    const res = await instance.get("/univers")
    return res.data
  } catch (error) {
    console.error("Error axios", error)
    throw error
  }
}

export async function getTypes() {
  try {
    const res = await instance.get("/types")
    return res.data
  } catch (error) {
    console.error("Error axios", error)
    throw error
  }
}

export async function getListeAchats() {
  try {
    const res = await instance.get("/ordersByUser")
    return res.data
  } catch (error) {
    console.error("Error axios", error)
    throw error
  }
}

export async function getListeVentes() {
  try {
    const res = await instance.get("/ordersByCreator")
    return res.data
  } catch (error) {
    console.error("Error axios", error)
    throw error
  }
}

// POST
export function postOrder(basketItems, newBillNumber, dateStr) {
  const formattedOrdersData = basketItems.map((item) => ({
    usersId: item.usersId,
    productsId: item.productsId,
    billNumber: newBillNumber,
    quantity: item.quantity,
    total: item.quantity * item.price,
    date: dateStr,
  }))
  return instance.post("/orders", formattedOrdersData)
}

// DELETE
export async function deleteUserById(userId) {
  try {
    const res = await instance.delete(`/users/${userId}`)
    return res.data
  } catch (error) {
    console.error("Error axios", error)
    throw error
  }
}
