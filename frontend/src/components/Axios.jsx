import axios from "axios"

const instance = axios.create({
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
    console.error("Error axios", error)
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

export async function Logout() {
  try {
    const res = await instance.get("/logout")
    return res.data
  } catch (error) {
    console.error("Error axios", error)
    throw error
  }
}

// POST
export async function creationUser(firstName, lastName, email, password) {
  try {
    const response = await instance.post("/users", {
      firstName,
      lastName,
      email,
      password,
    })
    return response.data
  } catch (error) {
    console.error("Error axios", error)
    throw error
  }
}

export async function login(email, password) {
  try {
    const response = await instance.post("/login", { email, password })
    return response.data
  } catch (error) {
    console.error("Error axios", error)
    throw error
  }
}

export async function basket(usersId, productsId, quantity, total) {
  try {
    const basketData = {
      usersId: usersId,
      productsId: productsId,
      quantity: quantity,
      total: total,
    }
    const response = await instance.post("/basket", basketData)
    return response.data
  } catch (error) {
    console.error("Error axios", error)
    throw error
  }
}

export function postOrder(basketItems, newBillNumber, dateStr) {
  const ordersData = basketItems.map((item) => ({
    usersId: item.usersId,
    productsId: item.productsId,
    billNumber: newBillNumber,
    quantity: item.quantity,
    total: item.quantity * item.price,
    date: dateStr,
  }))

  return instance.post("/orders", ordersData)
}

// PUT
export async function updateBasketQuantity(itemId, newQuantity) {
  try {
    const response = await instance.put(`/basket/${itemId}`, {
      quantity: newQuantity,
    })
    return response.data
  } catch (error) {
    console.error("Error axios", error)
    throw error
  }
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

export async function deleteItemFromBasket(itemId) {
  try {
    const res = await instance.delete(`/basket/${itemId}`)
    return res.data
  } catch (error) {
    console.error("Error axios", error)
    throw error
  }
}
