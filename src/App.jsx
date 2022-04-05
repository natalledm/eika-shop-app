import "./styles/App.css";
import IntroScreen from "./components/screens/IntroScreen";
import { useEffect, useState } from "react";
import Modal from "./components/modalForm/Modal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log(list);
  }, [list]);

  const createItem = (newItem) => {
    setList([...list, newItem]);
  };

  return (
    <div className="App">
      <IntroScreen setIsModalOpen={setIsModalOpen} />
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        createItem={createItem}
      />
    </div>
  );
}
