import { render, screen } from "@testing-library/react";
import { Home } from "../components/Pages/Home/Home";

describe("<PiQconvQradForm/>", () => {
  test("Render the 'HOME' component", () => {
    //ARRANGE
    render(<Home />);

    //ACT
    const stHome = screen.getByText(/WORK DESCRIPTION/i);

    //ASERT
    expect(stHome).toBeInTheDocument();
  });
});
