import React, { useEffect, useState } from "react"
import BarChart from "./BarChart"
import "./Graphe.scss"

function Graph({ orders }) {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Quantité vendue",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  })

  function aggregateData(data) {
    const aggregated = {}

    data.forEach((order) => {
      const productName = order.name
      if (aggregated[productName]) {
        aggregated[productName] += order.quantity
      } else {
        aggregated[productName] = order.quantity
      }
    })

    const productNames = Object.keys(aggregated)
    const quantities = Object.values(aggregated)

    return {
      labels: productNames,
      datasets: [
        {
          ...chartData.datasets[0],
          data: quantities,
        },
      ],
    }
  }

  useEffect(() => {
    if (orders && orders.length) {
      const processedData = aggregateData(orders)
      setChartData(processedData)
    }
  }, [orders])

  return (
    <div className="Graph">
      <BarChart data={chartData} />
    </div>
  )
}

export default Graph
