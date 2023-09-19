import React, { useState, useEffect } from "react"
import axios from "axios"
import BarChart from "../components/BarChart"
import "./Administrator.scss"

function Administrator() {
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:4242/orders").then((res) => {
      const data = res.data
      const dates = [...new Set(data.map((order) => order.date))] // Obtenez des dates uniques
      const quantitiesByDate = dates.map((date) => {
        return data
          .filter((order) => order.date === date)
          .reduce((sum, order) => sum + order.quantity, 0)
      })

      const transformedData = {
        labels: dates,
        datasets: [
          {
            label: "Quantité de produits vendus",
            data: quantitiesByDate,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      }

      setChartData(transformedData)
    })
  }, [])

  return <div>{chartData && <BarChart data={chartData} />}</div>
}

export default Administrator
