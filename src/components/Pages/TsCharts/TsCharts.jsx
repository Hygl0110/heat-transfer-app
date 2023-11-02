import "./TsCharts.css";
import React, { useEffect, useState } from "react";
import { TsChartForm } from "../../Molecules/TsChartsForm/TsChartForm";
import { initChartData } from "../../scripts/InitLineChart";
import { LineChart } from "../../Atoms/LineChart/LineChart";
import { Ts } from "../../scripts/SurfaceTemp";
import { initValues } from "../../scripts/initValues";

export const TsCharts = () => {
  const [carcasa, setCarcasa] = useState(initValues);
  const [hChart, setHChart] = useState(initChartData);
  const [eChart, setEChart] = useState(initChartData);

  //hChart
  useEffect(() => {
    try {
      console.log(carcasa);
      const { inputPower, E, As, Tinf, n } = carcasa;

      const xValues = [];
      const yValues = [];

      for (let x = 10; x <= 200; x += 10) {
        xValues.push(x);
        yValues.push(Ts(inputPower, x, E, As, Tinf, n));
      }

      setHChart({
        labels: xValues,
        datasets: [
          {
            label: " Surface temperature ",
            data: yValues,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 1)",
          },
        ],
      });
    } catch {
      alert("Valores no encontrados");
    }
  }, [carcasa]);

  useEffect(() => {
    try {
      const { inputPower, h, As, Tinf, n } = carcasa;

      const xValues = [];
      const yValues = [];

      for (let x = 0.05; x <= 1; x += 0.05) {
        x = parseFloat(x.toFixed(2));
        xValues.push(x);
        yValues.push(Ts(inputPower, h, x, As, Tinf, n));
      }

      setEChart({
        labels: xValues,
        datasets: [
          {
            label: " Surface temperature ",
            data: yValues,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 1)",
          },
        ],
      });
    } catch {
      alert("Valores no encontrados");
    }
  }, [carcasa]);

  return (
    <div className="TsChart_container">
      <h2>
        Line plot of 𝑻<sub>𝒔</sub> in function of 𝒉 y 𝜺:
      </h2>
      <TsChartForm
        /* values */
        inputPowerValue={carcasa.inputPower}
        watts={carcasa.inputPower * 745.7}
        hValue={carcasa.h}
        emissivityValue={carcasa.E}
        surfaceAreaValue={carcasa.As}
        tInfiniteValue={carcasa.Tinf}
        TinfK={carcasa.Tinf + 273.15}
        efficiencyValue={carcasa.n}
        /*Accitions */
        inputPowerChange={(e) => {
          setCarcasa({ ...carcasa, inputPower: parseFloat(e.target.value) });
        }}
        hChange={(e) => {
          setCarcasa({ ...carcasa, h: parseFloat(e.target.value) });
        }}
        emissivityChange={(e) => {
          setCarcasa({ ...carcasa, E: parseFloat(e.target.value) });
        }}
        surfaceAreaChange={(e) => {
          setCarcasa({ ...carcasa, As: parseFloat(e.target.value) });
        }}
        tInfiniteChange={(e) => {
          setCarcasa({ ...carcasa, Tinf: parseFloat(e.target.value) });
        }}
        efficiencyChange={(e) => {
          setCarcasa({ ...carcasa, n: parseFloat(e.target.value) });
        }}
      />
      <LineChart data={hChart} chartTitle={"Ts vs h"} />
      <LineChart data={eChart} chartTitle={"Ts vs E"} />
    </div>
  );
};
