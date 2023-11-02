import React from "react";

export const PiQconvQradForm = (props) => {
  return (
    <div className="PiQconvQradForm_container">
      <form onSubmit={(e) => e.preventDefault()}>
        {/*Form*/}
        <>
          <label>Input power (hp):</label>
          <input
            name="inputPower"
            min={0.1}
            step={0.1}
            className="input"
            type="number"
            value={props.inputPowerValue}
            onChange={props.inputPowerChange}
          />
          <p>: {props.watts} W</p>
        </>

        <>
          <label>
            h (W/m<sup>2</sup>K):
          </label>
          <input
            name="h"
            min={0.01}
            step={0.01}
            type="number"
            value={props.hValue}
            onChange={props.hChange}
          />
        </>

        <>
          <label>𝜺 (dimensionless):</label>
          <input
            name="E"
            max={1}
            min={0.01}
            step={0.01}
            type="number"
            value={props.emissivityValue}
            onChange={props.emissivityChange}
          />
        </>

        <>
          <label>
            Surface area (m
            <sup>2</sup>):
          </label>
          <input
            name="As"
            min={0.01}
            step={0.01}
            type="number"
            value={props.surfaceAreaValue}
            onChange={props.surfaceAreaChange}
          />
        </>

        <>
          <label>
            T<sub>&#8734;</sub> (°C)
          </label>
          <input
            name="Tinf"
            min={0.1}
            step={0.1}
            type="number"
            value={props.tInfiniteValue}
            onChange={props.tInfiniteChange}
          />
          <p>: {props.TinfK} K</p>
        </>

        <>
          <label>
            T<sub>surroundings</sub> (°C):
          </label>
          <input
            name="Talr"
            min={0.1}
            step={0.1}
            type="number"
            value={props.tSurroundingsValue}
            onChange={props.tSurroundingsChange}
          />
          <p>: {props.TalrK} K</p>
        </>

        <>
          <label>𝜂 (dimensionless): </label>
          <input
            name="n"
            max={1}
            min={0.01}
            step={0.01}
            type="number"
            value={props.efficiencyValue}
            onChange={props.efficiencyChange}
          />
        </>
      </form>
    </div>
  );
};
