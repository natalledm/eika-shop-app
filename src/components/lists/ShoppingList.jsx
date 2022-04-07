import imageIcon from "../../assets/icons/image-icon.png";
import checkImgUrl from "../../scripts/checkImgUrl";
import "../../styles/components/shopping-list.css";

export default function ShoppingList(props) {
  // pass isModalOpen to have the add item button
  if (props.list.length === 0) return;

  const items = props.list.map((item) => (
    <li key={item.id} className="list-item">
      <span className="check-name">
        <input
          className="checkbox"
          type="checkbox"
          value={item.isCompleted}
          defaultChecked={item.isCompleted}
          onChange={() => ""}
        />
        {item.name}
      </span>
      <span className="price-img">
        {item.price} :-
        <img src={checkImgUrl(item.imageURL, imageIcon)} alt="" />
      </span>
    </li>
  ));

  console.log(props.list);

  return <ul className="shop-list-container">{items}</ul>;
}
