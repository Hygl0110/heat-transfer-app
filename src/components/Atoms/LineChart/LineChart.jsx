import "./LineChart.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

export const LineChart = (props) => {
  const chartTitle = props.chartTitle;
  const xLavelTitle = props.xLavelTitle;

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    aspectRatio: 1,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            weight: "bold" /* size: 16, // Negrita para la leyenda */,
          },
        },
      },
      title: {
        display: true,
        text: chartTitle,
        font: {
          weight: "bold", // Negrita para el título */
        },
      },
      tooltip: {
        enabled: true,
        bodyFont: {
          /* size: 30, // Tamaño de fuente para el cuerpo del tooltip */
        },
        titleFont: {
          /* size: 30, // Tamaño de fuente para el título del tooltip */
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: xLavelTitle,
          weight: "bold",
        },
        // Configuración del eje X
      },
      y: {
        // Configuración del eje Y
      },
    },
  };

  return (
    <div className="line_container">
      <Line className="line" data={props.data} options={options} />
    </div>
  );
};
