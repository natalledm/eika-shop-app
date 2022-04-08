import "../styles/components/create-item-form.css";
import close from "../assets/icons/icon-close.png";
import { useState } from "react";
import validateName from "../scripts/validateName";
import validatePrice from "../scripts/validatePrice";

export default function CreateItemForm({ toggleModal, createItem }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const id = Date.now();

  function submitItem(event) {
    event.preventDefault();
    setError(false);
    setErrorMessage("");

    const validName = validateName(name);

    if (validName.error === true) {
      setError(true);
      setErrorMessage("The product name must not be empty");
      return;
    }

    const validPrice = validatePrice(price);

    if (validPrice.error === true) {
      setError(true);
      setErrorMessage("The price must be more than zero");
      return;
    }

    const newItem = {
      id: id,
      name: name,
      price: price,
      isCompleted: false,
      imageURL: "",
    };

    createItem(newItem);
    toggleModal();
  }

  return (
    <div className="form-container">
      <header className="form-header">
        <button className="form-close-button" onClick={toggleModal}>
          <img src={close} alt="close button" />
        </button>
        <h2 className="form-title">Create new item</h2>
      </header>
      <form onSubmit={(event) => submitItem(event)}>
        <label className="form-label">
          {error ? <small>{errorMessage}</small> : null}
          Product name
          <input
            type="text"
            autoFocus={true}
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Chair"
            required={true}
          />
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
            min="1"
          />
        </label>
        <button className="form-submit">Create item</button>
      </form>
      <button className="form-cancel" onClick={toggleModal}>
        Cancel
      </button>
    </div>
  );
}
