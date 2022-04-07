import "../../styles/components/modal.css";
import { createPortal } from "react-dom";

import CreateItemForm from "./CreateItemForm";

export default function Modal({ isModalOpen, toggleModal, createItem }) {
  if (isModalOpen === false) return;

  const modal = createPortal(
    <div role="dialog" className="modal-container">
      <div className="background-fade" onClick={toggleModal}></div>
      <div className="modal-content">
        <CreateItemForm toggleModal={toggleModal} createItem={createItem} />
      </div>
    </div>,
    document.getElementById("modal"),
  );

  return <div>{modal}</div>;
}
