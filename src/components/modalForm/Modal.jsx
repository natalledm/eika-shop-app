import { createPortal } from "react-dom";
import "../../styles/components/modal.css";

export default function Modal({ isModalOpen, setIsModalOpen }) {
  console.log("tá aberto?", isModalOpen);

  if (isModalOpen === false) return;

  return createPortal(
    <div role="dialog" className="modal-container">
      <div
        className="background-fade"
        onClick={() => setIsModalOpen(false)}
      ></div>
      <div className="modal-content">Modal Here</div>
    </div>,
    document.getElementById("modal"),
  );
}
