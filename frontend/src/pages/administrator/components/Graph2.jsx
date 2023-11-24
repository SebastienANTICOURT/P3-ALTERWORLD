import React, { useEffect, useState } from "react"
import BarChart from "./BarChart"

function Graph2({ orders }) {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Quantité vendue",
        data: [],
        backgroundColor: "rgba(145, 52, 52, 0.5)", // color of the bars
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  })

  function aggregateData(data) {
    const aggregated = {}

    data.forEach((order) => {
      const usersName = order.firstname
      if (aggregated[usersName]) {
        aggregated[usersName] += order.quantity // Sum up the quantities if the user exists
      } else {
        aggregated[usersName] = order.quantity // Initialize the quantity if the user does not exist
      }
    })

    const usersNames = Object.keys(aggregated)
    const quantities = Object.values(aggregated)

    return {
      labels: usersNames,
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
  }, [orders]) // The effect will re-run whenever the 'orders' prop changes

  return (
    <div className="Graph">
      <BarChart data={chartData} />
    </div>
  )
}

export default Graph2
