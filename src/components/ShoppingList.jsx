import imageIcon from "../assets/icons/image-icon.png";
import checkImgUrl from "../scripts/checkImgUrl";
import "../styles/components/shopping-list.css";

export default function ShoppingList({ list, onItemCheck }) {
  if (list.length === 0) return;

  const onChange = (itemId) => {
    if (onItemCheck !== undefined) {
      onItemCheck(itemId);
    }
  };

  const items = list.map((item) => (
    <li key={item.id} className="list-item">
      <span className="check-name">
        <input
          className="checkbox"
          type="checkbox"
          value={item.isCompleted}
          defaultChecked={item.isCompleted}
          onChange={() => onChange(item.id)}
        />
        {item.name}
      </span>
      <span className="price-img">
        {item.price} :-
        <img src={checkImgUrl(item.imageURL, imageIcon)} alt="" />
      </span>
    </li>
  ));

  return <ul className="shop-list-container">{items}</ul>;
}
