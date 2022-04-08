import { useState } from "react";
import ShoppingList from "../components/ShoppingList";

import logo from "../assets/logo/logo-desktop.png";
import eyeClosed from "../assets/icons/icon-eye-close.png";
import "../styles/screens/shopping-screen.css";
// import eyeOpen from "../../assets/icons/icon-eye-open.png";

export default function ShoppingScreen({ list, onItemCheck, toggleModal }) {
  const [isCompletedOpen, setIsCompletedOpen] = useState(false);
  const toggleCompletedList = () => setIsCompletedOpen(!isCompletedOpen);

  const incompleteItems = list.filter((item) => !item.isCompleted);
  const completeItems = list.filter((item) => item.isCompleted);

  return (
    <div className="shopping-screen-container flex-column-center">
      <header className="shop-header">
        <img src={logo} alt="Eika's logo" className="logo" />
        <h1 className="shop-title">Shopping List</h1>
      </header>
      <div className="list-container">
        <ShoppingList list={incompleteItems} onItemCheck={onItemCheck} />
      </div>
      <button className="main-button" onClick={toggleModal}>
        Add Item
      </button>
      <button className="completed-item-button" onClick={toggleCompletedList}>
        <img src={eyeClosed} alt="" className="complete-button-icon" />
        View Completed Items
      </button>
      <div>
        {isCompletedOpen ? <ShoppingList list={completeItems} /> : null}
      </div>
    </div>
  );
}
