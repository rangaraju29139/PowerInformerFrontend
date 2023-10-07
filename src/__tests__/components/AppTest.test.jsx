import { render, screen } from "@testing-library/react";
import App from "../../App";

test("App rendered successfully ", () => {
  render(<App />);
  const headingElement = screen.getByText(/This is the PowerInformerBackend/i);
  expect(headingElement).toBeInTheDocument();
});
