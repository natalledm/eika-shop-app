import "./styles/App.css";
import IntroScreen from "./screens/IntroScreen";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import ShoppingScreen from "./screens/ShoppingScreen";

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

  // change item isCompleted, create new list and save to state
  const onItemCheck = (itemId) => {
    const newList = list.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, isCompleted: true };
        return newItem;
      } else {
        return item;
      }
    });

    setList(newList);
  };

  // Save local storage
  useEffect(
    () => localStorage.setItem(storageKey, JSON.stringify(list)),
    [list],
  );

  const toggleModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="App">
      {list.length === 0 && <IntroScreen toggleModal={toggleModal} />}
      {list.length !== 0 && (
        <ShoppingScreen
          list={list}
          toggleModal={toggleModal}
          onItemCheck={onItemCheck}
        />
      )}
      <Modal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        createItem={createItem}
      />
    </div>
  );
}
