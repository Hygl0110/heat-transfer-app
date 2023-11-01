export const TsChartForm = (props) => {
  return (
    <div className="TsChartForm_container">
      <form className="TsForm" action="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="">Input power (hp): </label>
        <input
          min={0.1}
          step={0.1}
          className="input"
          type="number"
          value={props.inputPowerValue}
          onChange={props.inputPowerChange}
        />
        <p>: {props.watts} W</p>

        <label htmlFor="">
          h (W/m
          <sup>2</sup>K):
        </label>
        <input
          min={0.01}
          step={0.01}
          className="input"
          type="number"
          value={props.hValue}
          onChange={props.hChange}
        />

        <label htmlFor="">𝜺 (dimensionless): </label>
        <input
          max={1}
          min={0.01}
          step={0.01}
          className="input"
          type="number"
          value={props.emissivityValue}
          onChange={props.emissivityChange}
        />

        <label htmlFor="">
          Surface area (m
          <sup>2</sup>):
        </label>
        <input
          min={0.01}
          step={0.01}
          className="input"
          type="number"
          value={props.surfaceAreaValue}
          onChange={props.surfaceAreaChange}
        />

        <label htmlFor="">
          𝑇<sub>&#8734;</sub> (°C):
        </label>
        <input
          min={0.1}
          step={0.1}
          className="input"
          type="number"
          value={props.tInfiniteValue}
          onChange={props.tInfiniteChange}
        />
        <p>: {props.TinfK} K</p>

        <label htmlFor="">Efficiency (dimensionless): </label>
        <input
          max={1}
          min={0.01}
          step={0.01}
          className="input"
          type="number"
          value={props.efficiencyValue}
          onChange={props.efficiencyChange}
        />
      </form>
    </div>
  );
};
