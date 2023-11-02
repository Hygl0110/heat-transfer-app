import "./Home.css";
import dibujito from "../../../img/dibujito.jpg";

export const Home = () => {
  return (
    <div className="home">
      <h1>Application for heat transfer.</h1>
      <h3>WORK DESCRIPTION</h3>
      <p>
        The transmission housing side of a vehicle measures 𝑊 = 0.30 m and
        receives an input power of 𝑃𝑖= 150 hp from the engine. Measurements
        indicate that the transmission efficiency is 𝜂 = 0.93, the temperature
        of the air flow over the casing is 𝑇<sub>∞</sub>= 30°C and the
        convection heat transfer coefficient is ℎ W/m<sup>2</sup>K The
        emissivity of the shell material is 𝜀. Suppose the soil and Chassis can
        be approximated as a large surface area surrounding the casing for the
        exchange of radiation at a temperature of 𝑇<sub>surrounding</sub> = 30°C
        and that the Transmission can be modeled as a cube with edge equal to 𝑊.
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
    </div>
  );
};
