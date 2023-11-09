import logo from "../../img/logoITM.png";
export const Footer = () => {
  return (
    <footer>
      <label>Developments:</label>
      <p>
        Daniel Herney Cardona Jaramillo <br />
        Mateo Montoya Uribe <br />
        Iván Alexis Londoño Patiño <br />
      </p>
      <br />
      <label>Subjet:</label>
      <p>
        Transferencia de Calor <br />
      </p>
      <label>Professor:</label> Gustavo Adolfo Patiño Jaramillo <br />
      <label>
        Instituto Tecnológico Metropolitano <br />
        Facultad de Ingeniería y Electromecánica <br />
        Medellín <br />
        2023
      </label>
      <br />
      <img className="logo" src={logo} alt="" />
    </footer>
  );
};
