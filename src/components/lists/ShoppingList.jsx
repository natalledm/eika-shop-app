export default function ShoppingList(props) {
  // pass isModalOpen to have the add item button
  if (props.list.length === 0) return;

  const item = props.list.map((item) => <li key={item.id}>{item.name}</li>);

  console.log(props.list);

  return <ul>{item}</ul>;
}