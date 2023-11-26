import React, { useEffect, useState } from "react"
import { useOrdersContext } from "../../../components/contexts/OrdersContext"
import BarChart from "./BarChart"

function Graph2() {
  const { ordersData } = useOrdersContext()
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: "rgba(145, 52, 52, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  })

  const aggregateData = (data) => {
    return data.reduce((aggregated, order) => {
      const usersName = order.firstname
      aggregated[usersName] = (aggregated[usersName] || 0) + order.quantity
      return aggregated
    }, {})
  }

  useEffect(() => {
    if (ordersData && ordersData.length) {
      const aggregatedData = aggregateData(ordersData)
      const usersNames = Object.keys(aggregatedData)
      const quantities = Object.values(aggregatedData)
      setChartData({
        labels: usersNames,
        datasets: [
          {
            ...chartData.datasets,
            data: quantities,
          },
        ],
      })
    }
  }, [ordersData])

  return (
    <div className="Graph">
      <BarChart data={chartData} />
    </div>
  )
}

export default Graph2
