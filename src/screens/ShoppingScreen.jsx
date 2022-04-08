import { useState } from "react";
import ShoppingList from "../components/ShoppingList";

import logo from "../assets/logo/logo-desktop.png";
import eyeClosed from "../assets/icons/icon-eye-close.png";
import eyeOpen from "../assets/icons/icon-eye-open.png";
import "../styles/screens/shopping-screen.css";

export default function ShoppingScreen({ list, onItemCheck, toggleModal }) {
  const [isCompletedOpen, setIsCompletedOpen] = useState(false);
  const toggleCompletedList = () => setIsCompletedOpen(!isCompletedOpen);

  const incompleteItems = list.filter((item) => !item.isCompleted);
  const completeItems = list.filter((item) => item.isCompleted);

  const changeIconSrc = isCompletedOpen ? eyeOpen : eyeClosed;
  const CompleteButtonMessage = isCompletedOpen ? "Hide" : "Show";

  return (
    <div className="shopping-screen-container flex-column-center">
      <header className="shop-header">
        <img src={logo} alt="Eika's logo" className="logo" />
        <h1 className="shop-title">Shopping List</h1>
      </header>
      <div className="list-container">
        {incompleteItems.length === 0 ? (
          <p>No items to show</p>
        ) : (
          <ShoppingList list={incompleteItems} onItemCheck={onItemCheck} />
        )}
      </div>
      <button className="main-button" onClick={toggleModal}>
        Add Item
      </button>
      <button
        className="completed-item-button"
        onClick={toggleCompletedList}
        role="toggle-completed-list"
      >
        <img src={changeIconSrc} alt="" className="complete-button-icon" />
        {CompleteButtonMessage} Completed Items
      </button>
      <div>
        {isCompletedOpen ? <ShoppingList list={completeItems} /> : null}
      </div>
    </div>
  );
}
