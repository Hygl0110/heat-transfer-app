import dibujito from "../../../img/dibujito.jpg";

export const Home = () => {
  return (
    <div className="page_container">
      <h1>Application for heat transfer.</h1>
      <h3>WORK DESCRIPTION</h3>
      <p>
        The transmission housing side of a vehicle measures W = 0.30 m and
        receives an input power of P<sub>i</sub> = 150 hp from the engine.
        Measurements indicate that the transmission efficiency is 𝜂 = 0.93, the
        temperature of the air flow over the casing is T<sub>∞</sub>= 30°C and
        the convection heat transfer coefficient is h W/m<sup>2</sup>K The
        emissivity of the shell material is 𝜀. Suppose the soil and Chassis can
        be approximated as a large surface area surrounding the casing for the
        exchange of radiation at a temperature of T<sub>surrounding</sub> = 30°C
        and that the Transmission can be modeled as a cube with edge equal to W.
      </p>
      <h3>Base case values:</h3>
      <p>
        Specifically, calculate and plot the graphs of the dependent variables
        for parametric variations in the independent variables, considering the
        values of h = 200 W/m²·K and ε = 0.8 for the base case. The suggested
        intervals for the independent variables are as follows: <br />
        <br /> Heat transfer coefficient by convection: <br /> 10 ≤ h ≤ 200
        W/m²·K <br /> with a variation step of 10 W/m²·K. <br />
        <br />
        Surface emissivity of the panel: 0.05 ≤ ε ≤ 1 <br /> with a variation
        step of 0.05.
      </p>
      <br />
      <br />
      <img className="dibujo" src={dibujito} alt="" />
      <br />
      <br />
      <h3>Assumptions</h3>
      <p>
        To perform calculations, the following assumptions were taken into
        account:
      </p>
      <ul>
        <li>
          <b>Steady state:</b> We assume that the engine and the environment are
          in a steady state, which means there are no significant changes in
          temperatures over time
        </li>
        <li>
          <b>Uniform surface:</b> We assume that the engine's surface is uniform
          in temperature and properties across its heat transfer area.
        </li>
        <li>
          <b>Uniform ambient temperature:</b> We assume that the ambient
          temperature (T<sub>surrounding</sub> and T<sub>∞</sub>) is
          approximately constant over the heat transfer area.
        </li>
        <li>
          <b>Steady-state radiation:</b> In the case of radiation, it is assumed
          that thermal radiation is in a steady-state, which means there are no
          significant changes in surface and ambient temperatures over time.
        </li>
      </ul>
    </div>
  );
};
