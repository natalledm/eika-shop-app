import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal");
document.body.appendChild(modalRoot);

jest.mock("./CreateItemForm", () => {
  return {
    __esmodule: true,
    A: true,
    default: () => {
      return <div role="dialog">Create new item</div>;
    },
  };
});

it("renders the Modal if it receives the property true", () => {
  const isModalOpen = true;
  render(<Modal isModalOpen={isModalOpen} />);
  const RoleModal = screen.queryByText("Create new item");
  expect(RoleModal).toBeInTheDocument();
});
