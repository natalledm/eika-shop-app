import "../../styles/components/create-item-form.css";
import close from "../../assets/icons/icon-close.png";
import { useState, useId } from "react";

export default function CreateItemForm({ setIsModalOpen, createItem }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const id = useId();

  function submitItem(event) {
    event.preventDefault();

    const newItem = {
      id: id,
      name: name,
      price: price,
      isCompleted: false,
      imageURL: "",
    };

    createItem(newItem);
    console.log(newItem);
    setIsModalOpen(false);
  }

  return (
    <div className="form-container">
      <header className="form-header">
        <button
          className="form-close-button"
          onClick={() => setIsModalOpen(false)}
        >
          <img src={close} alt="close button" />
        </button>
        <h2 className="form-title">Create new item</h2>
      </header>
      <form onSubmit={(event) => submitItem(event)}>
        <label className="form-label">
          Product name
          <input
            type="text"
            autoFocus={true}
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Chair"
            required={true}
          />
          {/* <small>The product name must not be empty</small> */}
        </label>
        <label className="form-label">
          Product price
          <input
            type="number"
            autoFocus={false}
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="100"
            required={true}
          />
          {/* <small>The price must cost more than 0</small> */}
        </label>
        <button className="form-submit">Create item</button>
      </form>
      <button className="form-cancel" onClick={() => setIsModalOpen(false)}>
        Cancel
      </button>
    </div>
  );
}
