import logo from "../../assets/logo/logo-desktop.png";
import ShoppingList from "../lists/ShoppingList";

export default function ShoppingScreen({ list, setIsModalOpen }) {
  return (
    <div>
      <header>
        <img src={logo} alt="Eika's logo" />
        <h1>Shopping List</h1>
      </header>
      <div>
        <ShoppingList list={list.filter((item) => !item.isCompleted)} />
      </div>
      <button onClick={() => setIsModalOpen(true)}>Add Item</button>
    </div>
  );
}
