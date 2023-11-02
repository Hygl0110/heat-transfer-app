import { useEffect, useState } from "react";
import { QconvQradForm } from "../../Molecules/QconvQradForm/QconvQradForm";
import { LineChart } from "../../Atoms/LineChart/LineChart";
import { initChartData } from "../../scripts/InitLineChart";
import { Qconv, Qrad, Ts } from "../../scripts/SurfaceTemp";
import { initValues } from "../../scripts/initValues";

export const QconvQrad = () => {
  //Valores iniciales
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

  //Dinamic Data sets, and Dinamic Line PLOTS
  try {
    //hChart
    useEffect(() => {
      console.log(carcasa);

      const { inputPower, h, E, As, Talr, Tinf, n } = carcasa;

      //Qconv Qrad vs h
      const hValues = [];
      const hQconvValues = [];
      const hQradValues = [];
      //Array h for Q and hQconv, hQrad values
      for (let hQ = 10; hQ <= 200; hQ += 10) {
        hValues.push(hQ);
        hQconvValues.push(
          Qconv(hQ, As, Tinf, Ts(inputPower, hQ, E, As, Tinf, n))
        );
        hQradValues.push(Qrad(E, As, Ts(inputPower, hQ, E, As, Tinf, n), Talr));
      }
      //New hChartValues dataFrame
      const newHCartValues = {
        labels: hValues,
        datasets: [
          {
            label: " Qconv ",
            data: hQconvValues,
            borderColor: "rgba(75, 192, 0, 1)",
            backgroundColor: "rgba(75, 192, 0, 1)",
          },
          {
            label: " Qrad ",
            data: hQradValues,
            borderColor: "rgba(0, 192, 192, 1)",
            backgroundColor: "rgba(0, 192, 192, 1)",
          },
        ],
      };

      //Qconv Qrad vs E
      const eValues = [];
      const eQconvValues = [];
      const eQradValues = [];

      //Array e for Q and eQconv, eQrad values
      for (let eQ = 0.05; eQ <= 1; eQ += 0.05) {
        eQ = parseFloat(eQ.toFixed(2));
        eValues.push(eQ);
        eQconvValues.push(
          Qconv(h, As, Tinf, Ts(inputPower, h, eQ, As, Tinf, n))
        );
        eQradValues.push(
          Qrad(eQ, As, Ts(inputPower, h, eQ, As, Tinf, n), Talr)
        );
      }

      const newECartValues = {
        labels: eValues,
        datasets: [
          {
            label: " Qconv ",
            data: eQconvValues,
            borderColor: "rgba(75, 192, 0, 1)",
            backgroundColor: "rgba(75, 192, 0, 1)",
          },
          {
            label: " Qrad ",
            data: eQradValues,
            borderColor: "rgba(0, 192, 192, 1)",
            backgroundColor: "rgba(0, 192, 192, 1)",
          },
        ],
      };

      //Set chart values
      setHChart(newHCartValues);
      setEChart(newECartValues);
    }, [carcasa]);
  } catch {
    console.log("Valores no encontrados");
  }

  return (
    <div className="page_container">
      <>
        <h2>
          Graphics of Q&#x0307;<sub>conv</sub> and Q&#x0307;
          <sub>rad</sub> in function of h and 𝜺 :
        </h2>
      </>

      <>
        <QconvQradForm
          /* values */
          inputPowerValue={carcasa.inputPower}
          watts={carcasa.inputPower * 745.7}
          hValue={carcasa.h}
          emissivityValue={carcasa.E}
          surfaceAreaValue={carcasa.As}
          tInfiniteValue={carcasa.Tinf}
          TinfK={carcasa.Tinf + 273.15}
          tSurroundingsValue={carcasa.Talr}
          TalrK={carcasa.Talr + 273.15}
          efficiencyValue={carcasa.n}
          /*Accitions */
          inputPowerChange={handleFormChange}
          hChange={handleFormChange}
          emissivityChange={handleFormChange}
          surfaceAreaChange={handleFormChange}
          tInfiniteChange={handleFormChange}
          tSurroundingsChange={handleFormChange}
          efficiencyChange={handleFormChange}
        />
      </>

      <>
        <LineChart
          data={hChart}
          chartTitle={"Qconv Qrad vs h"}
          xLavelTitle={"h variable"}
        />
        <LineChart
          data={eChart}
          chartTitle={"Qconv Qrad vs E"}
          xLavelTitle={"𝜺 variable"}
        />
      </>
    </div>
  );
};
