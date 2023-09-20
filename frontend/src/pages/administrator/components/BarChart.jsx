import { Bar } from "react-chartjs-2"
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js"
Chart.register(BarController, BarElement, CategoryScale, LinearScale)

function BarChart({ data, options }) {
  return <Bar data={data} options={options} />
}

export default BarChart
