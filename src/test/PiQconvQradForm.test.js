//Patron AAA Arrangue - Act - Assert

import { render, screen } from "@testing-library/react";
import { PiQconvQradForm } from "../components/Molecules/PiQconvQradForm/PiQconvQradForm";

//1. describe(qué se esta probando, () =>{codigo para el test} )
describe("<PiQconvQradForm/>", () => {
  //¿el componente esxiste?
  test("Render the form component", () => {
    //ARRANGE
    //Metodo render - simula el renderizado del componente
    render(<PiQconvQradForm />);

    //ACT
    //Intentar acceder a un texto del componente para comprovar si existe
    //la sitanxis para leer y asignar texto es /texto/i
    console.log(screen.debug());
    const stForm = screen.getByLabelText(/Input power \(hp\):/);

    //ASERT
    //Se usa expect(), con lo cual decimos 'Espero que exista en el documento'
    expect(stForm).toBeInTheDocument();

    //Comando para ejetucar el test npm test
  });
});
