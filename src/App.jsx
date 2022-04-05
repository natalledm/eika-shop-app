import "./styles/App.css";
import IntroScreen from "./components/screens/IntroScreen";
import { useState } from "react";
import Modal from "./components/modalForm/Modal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <IntroScreen setIsModalOpen={setIsModalOpen} />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}
