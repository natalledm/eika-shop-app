import { render, screen } from "@testing-library/react";
import IntroScreen from "./IntroScreen";

it("checks if the IntroScreen is rendered", () => {
  render(<IntroScreen />);
  const paragraphElement = screen.getByText(/Welcome to EIKA’s shopping list/i);
  expect(paragraphElement).toBeInTheDocument();
});
