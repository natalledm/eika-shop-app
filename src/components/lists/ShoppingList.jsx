import imageIcon from "../../assets/icons/image-icon.png";
import checkImgUrl from "../../scripts/checkImgUrl";

export default function ShoppingList(props) {
  // pass isModalOpen to have the add item button
  if (props.list.length === 0) return;

  const items = props.list.map((item) => (
    <li key={item.id}>
      <input
        type="checkbox"
        value={item.isCompleted}
        defaultChecked={item.isCompleted}
        onChange={() => ""}
      />
      {item.name}
      <span> {item.price} :-</span>
      <span>
        <img src={checkImgUrl(item.imageURL, imageIcon)} alt="" />
      </span>
    </li>
  ));

  console.log(props.list);

  return <ul>{items}</ul>;
}
