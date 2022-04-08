import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingScreen from "./ShoppingScreen";

it("checks if the ShoppingScreen is rendered", () => {
  const list = [
    {
      id: 1649417859408,
      name: "Chair",
      price: "200",
      isCompleted: false,
      imageURL: "",
    },
  ];

  render(
    <ShoppingScreen
      list={list}
      onItemCheck={() => {}}
      toggleModal={() => {}}
    />,
  );
  const titleElement = screen.getByText(/Shopping list/i);
  expect(titleElement).toBeInTheDocument();
});

it("checks if the item from list is rendered", () => {
  const list = [
    {
      id: 1649417859408,
      name: "Chair",
      price: "200",
      isCompleted: false,
      imageURL: "",
    },
  ];

  render(
    <ShoppingScreen
      list={list}
      onItemCheck={() => {}}
      toggleModal={() => {}}
    />,
  );
  const itemNameElement = screen.getByText(list[0].name);
  expect(itemNameElement).toBeInTheDocument();
});

it("checks if the View Completed Items button is rendered", () => {
  const list = [
    {
      id: 1649417859408,
      name: "Chair",
      price: "200",
      isCompleted: false,
      imageURL: "",
    },
  ];

  render(
    <ShoppingScreen
      list={list}
      onItemCheck={() => {}}
      toggleModal={() => {}}
    />,
  );
  const buttonElement = screen.getByRole("toggle-completed-list");
  expect(buttonElement).toBeInTheDocument();
});

it("checks if the item from completed list is rendered", () => {
  const list = [
    {
      id: 1649417859408,
      name: "Chair",
      price: "200",
      isCompleted: false,
      imageURL: "",
    },
    {
      id: 1649417859408,
      name: "Chair",
      price: "200",
      isCompleted: true,
      imageURL: "",
    },
  ];

  render(
    <ShoppingScreen
      list={list}
      onItemCheck={() => {}}
      toggleModal={() => {}}
    />,
  );
  const itemNameElement = screen.getByText(list[1].name);
  expect(itemNameElement).toBeInTheDocument();
});

it("checks if the Completed Items list toggle hide list", () => {
  const list = [
    {
      id: 1649417859408,
      name: "Chair",
      price: "200",
      isCompleted: true,
      imageURL: "",
    },
  ];

  render(
    <ShoppingScreen
      list={list}
      onItemCheck={() => {}}
      toggleModal={() => {}}
    />,
  );
  const completeItemsButton = screen.getByRole("toggle-completed-list");
  fireEvent.click(completeItemsButton);
  const toggleButton = screen.queryByText(/Hide Completed Items/i);
  expect(toggleButton).toBeInTheDocument();
});

it("Checks if 'No items to show appears' if list is empty", () => {
  const list = [];

  render(
    <ShoppingScreen
      list={list}
      onItemCheck={() => {}}
      toggleModal={() => {}}
    />,
  );
  const noItemElement = screen.getByText("No items to show");
  expect(noItemElement).toBeInTheDocument();
});
