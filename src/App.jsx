import "./styles/App.css";
import IntroScreen from "./components/screens/IntroScreen";
import { useEffect, useState } from "react";
import Modal from "./components/modalForm/Modal";
import ShoppingScreen from "./components/screens/ShoppingScreen";

import getLocalStorage from "./scripts/getLocalStorage";

export default function App() {
  // Property
  const storageKey = "shop-list";

  // state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [list, setList] = useState(getLocalStorage(storageKey));

  // set item
  function createItem(newItem) {
    setList([...list, newItem]);
  }

  // Save local storage
  useEffect(
    () => localStorage.setItem(storageKey, JSON.stringify(list)),
    [list],
  );

  return (
    <div className="App">
      {list.length === 0 && <IntroScreen setIsModalOpen={setIsModalOpen} />}
      {list.length !== 0 && (
        <ShoppingScreen list={list} setIsModalOpen={setIsModalOpen} />
      )}
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        createItem={createItem}
      />
    </div>
  );
}
