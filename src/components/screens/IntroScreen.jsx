import image from "../../assets/images/woman-shopping.png";
import logo from "../../assets/logo/logo-desktop.png";
import "../../styles/screens/intro-screen.css";

export default function IntroScreen({ setIsModalOpen }) {
  return (
    <div className="intro-screen-container flex-column-center">
      <div>
        <img
          src={logo}
          alt="Logo from Eika made of the letters"
          className="logo"
        />
      </div>
      <section>
        <img
          src={image}
          alt="Woman leaving store with shopping bags"
          className="intro-image"
        />
        <h1 className="intro-title">EIKA's shopping list</h1>
        <p className="intro-paragraph">
          Welcome to EIKA’s shopping list. Here you will be able to create a
          shopping list for the furniture you want to buy.
        </p>
        <p className="intro-paragraph">
          To get started press the Add item button below and a pop-up will ask
          you the name and the price of the item you want to purchase. You can
          also add an image after the item is added by touching the image icon.
        </p>
        <button className="main-button" onClick={() => setIsModalOpen(true)}>
          Add item
        </button>
      </section>
    </div>
  );
}
