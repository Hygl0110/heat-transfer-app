import "./Cuadratic.css";
import React, { useEffect, useState } from "react";
import CuadraticDataForm from "../../Molecules/DataForm/CuadraticDataForm";
import { LineChart } from "../../Atoms/LineChart/LineChart";
import { initChartData } from "../../scripts/InitLineChart";

export const Cuadratic = () => {
  const [coef, setCoef] = useState({ a: 0, b: 0, c: 0 });
  const [chartData, setChartData] = useState(initChartData);

  useEffect(() => {
    console.log(coef);

    const xValues = [];
    const yValues = [];

    for (let x = -100; x <= 100; x += 1) {
      xValues.push(x);
      yValues.push(coef.a * x * x + coef.b * x + coef.c);
    }

    setChartData({
      labels: xValues,
      datasets: [
        {
          label: "Funcion Cuadratica",
          data: yValues,
          backgroundColor: "rgba(75, 192, 192, 1)",
          borderWidth: 0.2,
        },
      ],
    });
  }, [coef]);

  return (
    <div className="cuadratic">
      <main>
        <>
          <CuadraticDataForm
            aValue={coef.a}
            aChange={(e) => {
              setCoef({ ...coef, a: parseFloat(e.target.value) });
            }}
            bValue={coef.b}
            bChange={(e) => {
              setCoef({ ...coef, b: parseFloat(e.target.value) });
            }}
            cValue={coef.c}
            cChange={(e) => {
              setCoef({ ...coef, c: parseFloat(e.target.value) });
            }}
          />
        </>
        <>
          <h4>
            {"y(x)"} = {coef.a}x<sup>&sup2;</sup> + {coef.b}x + {coef.c}
          </h4>
        </>
        <>
          <LineChart data={chartData} chartTitle={"Cuadratica"} />
        </>
      </main>
    </div>
  );
};
