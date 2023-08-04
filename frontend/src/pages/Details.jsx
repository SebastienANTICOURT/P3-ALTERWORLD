import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function Details() {
  const { id } = useParams()
  const [detail, setDetail] = useState([])

  axios.get(`http://localhost:4242/products/${id}`).then((res) => {
    setDetail(res.data)
  })

  return (
    <>
      <p>DETAILS</p>
      <div>{detail.name}</div>
      <img src={`http://localhost:4242${detail.image1}`} />
      <div>{detail.Prix}</div>
    </>
  )
}
export default Details
