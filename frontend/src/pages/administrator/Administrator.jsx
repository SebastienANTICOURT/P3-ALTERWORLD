import { useState, useEffect } from "react"
import axios from "axios"
import Graph from "./components/Graph"
import Graph2 from "./components/Graph2"
import "./Administrator.scss"

function Administrator() {
  const [ordersData, setOrdersData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4242/orders").then((res) => {
      setOrdersData(res.data[0])
    })
  }, [])

  return (
    <div className="Administrator">
      <h1>Produits par quantités vendues.</h1>
      <div className="BarChart">
        <Graph orders={ordersData} />
        <Graph2 orders={ordersData} />
      </div>
      {/* <button onClick={handleExport}>Exporter vers Excel</button> */}
    </div>
  )
}

export default Administrator

// // const [name, setName] = useState("")
// // const [image, setImage] = useState("")
// // const [price, setPrice] = useState("")
// // const [creatorId, setCreatorId] = useState("")
// // const [univerId, setUniverId] = useState("")
// // const [typesId, setTypesId] = useState("")

// // const addProduct = () => {
// //   axios
// //     .post("http://localhost:4242/basket", {
// //       name,
// //       image,
// //       price,
// //       creatorId,
// //       univerId,
// //       typesId,
// //     })
// //     .then((response) => {
// //       console.log(response)
// //     })
// //     .catch((error) => {
// //       console.error(error)
// //     })
// // }

// {
//   /* <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Image Path"
//         value={image}
//         onChange={(e) => setImage(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Price"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Creator ID"
//         value={creatorId}
//         onChange={(e) => setCreatorId(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Univer ID"
//         value={univerId}
//         onChange={(e) => setUniverId(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Type ID"
//         value={typesId}
//         onChange={(e) => setTypesId(e.target.value)}
//       />
//       <button>Add Product</button> */
// }
