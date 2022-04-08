import { render, screen } from "@testing-library/react";
import ShoppingList from "./ShoppingList";

it("Renders if any list have items", () => {
  const list = [
    {
      id: 1649417859408,
      name: "Chair",
      price: "200",
      isCompleted: false,
      imageURL: "",
    },
  ];

  render(<ShoppingList list={list} onItemCheck={() => {}} />);
  const itemNameElement = screen.getByText(list[0].name);
  expect(itemNameElement).toBeInTheDocument();
});

it("Do not render if list is empty", () => {
  const list = [];
  const { container } = render(
    <ShoppingList list={list} onItemCheck={() => {}} />,
  );
  expect(container).toBeEmptyDOMElement();
});
