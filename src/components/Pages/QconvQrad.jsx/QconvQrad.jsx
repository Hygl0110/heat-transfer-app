import "./QconvQrad.css";
import React, { useEffect, useState } from "react";
import { QconvQradForm } from "../../Molecules/QconvQradForm/QconvQradForm";
import { LineChart } from "../../Atoms/LineChart/LineChart";
import { initChartData } from "../../scripts/InitLineChart";
import { Qconv, Qrad, Ts } from "../../scripts/SurfaceTemp";
import { initValues } from "../../scripts/initValues";

export const QconvQrad = () => {
  const [hChart, setHChart] = useState(initChartData);
  const [eChart, setEChart] = useState(initChartData);
  const [carcasa, setCarcasa] = useState(initValues);

  //hChart
  useEffect(() => {
    try {
      console.log(carcasa);
      const { inputPower, h, E, As, Talr, Tinf, n } = carcasa;

      //Qconv Qrad vs h
      const hValues = [];
      const hQconvValues = [];
      const hQradValues = [];

      //Qconv Qrad vs E
      const eValues = [];
      const eQconvValues = [];
      const eQradValues = [];

      //h values
      for (let hQ = 10; hQ <= 200; hQ += 10) {
        hValues.push(hQ);
        hQconvValues.push(
          Qconv(hQ, As, Tinf, Ts(inputPower, hQ, E, As, Tinf, n))
        );
        hQradValues.push(Qrad(E, As, Ts(inputPower, hQ, E, As, Tinf, n), Talr));
      }
      //e values
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

      setHChart({
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
      });

      setEChart({
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
      });
    } catch {
      alert("Valores no encontrados");
    }
  }, [carcasa]);

  return (
    <div className="QconvQrad_container">
      <h2>
        Line plot of Q&#x0307;<sub>𝒄𝒐𝒏𝒗</sub> y Q&#x0307;<sub>𝒓𝒂𝒅</sub> in
        function of 𝒉 y 𝜺:
      </h2>
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
        Tsc={Ts(
          carcasa.inputPower,
          carcasa.h,
          carcasa.E,
          carcasa.As,
          carcasa.Tinf,
          carcasa.n
        ).toFixed(2)}
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
        tSurroundingsChange={(e) => {
          setCarcasa({ ...carcasa, Talr: parseFloat(e.target.value) });
        }}
        efficiencyChange={(e) => {
          setCarcasa({ ...carcasa, n: parseFloat(e.target.value) });
        }}
      />
      <LineChart data={hChart} chartTitle={"Qconv Qrad vs h"} />
      <LineChart data={eChart} chartTitle={"Qconv Qrad vs E"} />
    </div>
  );
};
