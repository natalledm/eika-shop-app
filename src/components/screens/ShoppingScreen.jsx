import ShoppingList from "../lists/ShoppingList";
import logo from "../../assets/logo/logo-desktop.png";
import "../../styles/screens/shopping-screen.css";
import eyeClosed from "../../assets/icons/icon-eye-close.png";
import CompletedList from "../lists/CompletedList";
// import eyeOpen from "../../assets/icons/icon-eye-open.png";

export default function ShoppingScreen({ list, setIsModalOpen }) {
  console.log(list);

  function filterIncompleteItems(list) {
    const incompleteItems = list.filter((item) => !item.isCompleted);
    return incompleteItems;
  }

  return (
    <div className="shopping-screen-container flex-column-center">
      <header className="shop-header">
        <img src={logo} alt="Eika's logo" className="logo" />
        <h1 className="shop-title">Shopping List</h1>
      </header>
      <div className="list-container">
        <ShoppingList list={filterIncompleteItems(list)} />
      </div>
      <button className="main-button" onClick={() => setIsModalOpen(true)}>
        Add Item
      </button>
      <button className="completed-item-button">
        <img src={eyeClosed} alt="" className="complete-button-icon" />
        View Completed Items
      </button>
      <div>
        <CompletedList />
      </div>
    </div>
  );
}
