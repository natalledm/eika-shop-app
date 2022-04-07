import logo from "../../assets/logo/logo-desktop.png";
import ShoppingList from "../lists/ShoppingList";

export default function ShoppingScreen({ list, setIsModalOpen }) {
  console.log(list);

  function filterIncompleteItems(list) {
    const incompleteItems = list.filter((item) => !item.isCompleted);
    return incompleteItems;
  }

  return (
    <div>
      <header>
        <img src={logo} alt="Eika's logo" />
        <h1>Shopping List</h1>
      </header>
      <div>
        <ShoppingList list={filterIncompleteItems(list)} />
      </div>
      <button onClick={() => setIsModalOpen(true)}>Add Item</button>
    </div>
  );
}
