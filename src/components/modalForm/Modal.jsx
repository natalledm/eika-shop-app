import "../../styles/components/modal.css";
import { createPortal } from "react-dom";

import CreateItemForm from "./CreateItemForm";

export default function Modal({ isModalOpen, setIsModalOpen, createItem }) {
  if (isModalOpen === false) return;

  return createPortal(
    <div role="dialog" className="modal-container">
      <div
        className="background-fade"
        onClick={() => setIsModalOpen(false)}
      ></div>
      <div className="modal-content">
        <CreateItemForm
          setIsModalOpen={setIsModalOpen}
          createItem={createItem}
        />
      </div>
    </div>,
    document.getElementById("modal"),
  );
}
