import { useEffect, useState } from "react"
import { useOrdersContext } from "../../../components/contexts/OrdersContext"
import BarChart from "./BarChart"
import "./Graphe.scss"

function Graph() {
  const { salesQuantities } = useOrdersContext()
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

  useEffect(() => {
    const productNames = Object.keys(salesQuantities)
    const quantities = Object.values(salesQuantities)
    setChartData({
      labels: productNames,
      datasets: [
        {
          ...chartData.datasets,
          data: quantities,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    })
  }, [salesQuantities])

  return (
    <div className="Graph">
      <BarChart data={chartData} />
    </div>
  )
}

export default Graph
