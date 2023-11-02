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
        exchange of radiation at a temperature of 𝑇<sub>𝑎𝑙𝑟𝑒𝑑</sub> = 30°C and
        that the Transmission can be modeled as a cube with edge equal to 𝑊.
      </p>
      <p>
        <h4>Initial Values</h4>
        Específicamente, calcule y dibuje las gráficas de las variables
        dependientes anteriores para variaciones paramétricas en las variables
        independientes, considerando los valores de ℎ = 200 W/m2.K y 𝜀 = 0.8
        para el caso base. Los intervalos sugeridos de las variables
        independientes son:
        <br />
        Coeficiente de transferencia de calor por convección: 10 ≤ ℎ ≤ 200
        W/m2.K Con paso de variación igual a 10 W/m2 .K.
        <br />
        Emisividad de la superficie del panel: 0.05 ≤ 𝜀 ≤ 1 Con paso de
        variación igual a 0.05.
      </p>
      <br />
      <br />
      <img className="dibujo" src={dibujito} alt="" />
    </div>
  );
};
