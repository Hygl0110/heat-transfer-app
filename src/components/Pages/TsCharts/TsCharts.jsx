import { useEffect, useState } from "react";
import { TsChartForm } from "../../Molecules/TsChartsForm/TsChartForm";
import { initChartData } from "../../scripts/InitLineChart";
import { LineChart } from "../../Atoms/LineChart/LineChart";
import { Ts } from "../../scripts/SurfaceTemp";
import { initValues } from "../../scripts/initValues";

export const TsCharts = () => {
  const [carcasa, setCarcasa] = useState(initValues);
  const [hChart, setHChart] = useState(initChartData);
  const [eChart, setEChart] = useState(initChartData);

  //Dinamic Form
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    try {
      setCarcasa({ ...carcasa, [name]: parseFloat(value) });
    } catch {
      console.log("El valor es NaN");
    }
  };

  //Dynamic Data Sets aun Dynamic Plost
  try {
    useEffect(() => {
      console.log(carcasa);

      const { inputPower, h, E, As, Tinf, n } = carcasa;

      //Ts vs h
      const hValues = [];
      const TshValues = [];
      //array de datos
      for (let h = 10; h <= 200; h += 10) {
        hValues.push(h);
        TshValues.push(Ts(inputPower, h, E, As, Tinf, n));
      }
      //nuevo objeto tabla de datos Data para el grafico
      const newHChart = {
        labels: hValues,
        datasets: [
          {
            label: " Ts ",
            data: TshValues,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 1)",
          },
        ],
      };

      //Ts vs E
      const eValues = [];
      const TseValues = [];
      //array de datos
      for (let e = 0.05; e <= 1; e += 0.05) {
        e = parseFloat(e.toFixed(2));
        eValues.push(e);
        TseValues.push(Ts(inputPower, h, e, As, Tinf, n));
      }
      //nuevo objeto tabla de datos
      const newEChart = {
        labels: eValues,
        datasets: [
          {
            label: " Surface temperature ",
            data: TseValues,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 1)",
          },
        ],
      };

      //Set de las tablas con los nuevos valores
      setHChart(newHChart);
      setEChart(newEChart);
    }, [carcasa]);
  } catch {
    alert("Valores no encontrados");
  }

  return (
    <div className="page_container">
      <>
        <h2>
          Graphics of T<sub>s</sub> in function of h and 𝜺 :
        </h2>
      </>

      <>
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
          inputPowerChange={handleFormChange}
          hChange={handleFormChange}
          emissivityChange={handleFormChange}
          surfaceAreaChange={handleFormChange}
          tInfiniteChange={handleFormChange}
          efficiencyChange={handleFormChange}
        />
      </>

      <>
        <LineChart
          data={hChart}
          chartTitle={"Ts vs h"}
          xLavelTitle={"h variable"}
        />
        <LineChart
          data={eChart}
          chartTitle={"Ts vs E"}
          xLavelTitle={"𝜺 variable"}
        />
      </>
    </div>
  );
};
