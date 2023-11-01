import "./Home.css";
import dibujito from "../../../img/dibujito.jpg";

export const Home = () => {
  return (
    <div className="home">
      <h1>App para transferencia de calor</h1>
      <h3>DESCRIPCIÓN DEL TRABAJO</h3>
      <p>
        El lado de la carcasa de la transmisión de un vehículo mide 𝑊 = 0.30 m y
        recibe una potencia de entrada de 𝑃<sub>𝑖</sub> = 150 hp desde el motor.
        Mediciones indican que la eficiencia de la transmisión es 𝜂 = 0.93, la
        temperatura del flujo de aire sobre la carcasa es 𝑇<sub>&#8734;</sub> =
        30°C y el coeficiente de transferencia de calor por convección es ℎ W/m
        <sup>2</sup>K, La emisividad del material de la carcasa es 𝜀. Suponga
        que el suelo y el chasis pueden ser aproximados como una superficie
        grande que rodea a la carcasa para el intercambio de radiación a una
        temperatura de 𝑇<sub>𝑎𝑙𝑟𝑒𝑑</sub> = 30°C y que la transmisión se puede
        modelar como un cubo con arista igual a 𝑊.
      </p>
      <p></p>
      <img className="dibujo" src={dibujito} alt="" />
    </div>
  );
};
