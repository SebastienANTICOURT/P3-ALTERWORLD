// import React, { useState, useEffect } from "react"
// import { Line } from "react-chartjs-2"

// function Graph2({ orders = [] }) {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [],
//   })

//   useEffect(() => {
//     const dataByProduct = {}

//     orders.forEach((order) => {
//       if (!dataByProduct[order.name]) {
//         dataByProduct[order.name] = []
//       }
//       dataByProduct[order.name].push({
//         date: order.date,
//         quantity: order.quantity,
//       })
//     })

//     const datasets = Object.keys(dataByProduct).map((productName) => {
//       const sortedData = dataByProduct[productName].sort(
//         (a, b) => new Date(a.date) - new Date(b.date)
//       )
//       return {
//         label: productName,
//         data: sortedData.map((item) => item.quantity),
//         fill: false,
//         borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
//       }
//     })

//     const labels = orders.map((order) => order.date)

//     setChartData({ labels, datasets })
//   }, [orders])

//   return (
//     <div>
//       <Line data={chartData} />
//     </div>
//   )
// }

// export default Graph2
