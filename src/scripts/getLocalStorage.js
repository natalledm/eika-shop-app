export default function getLocalStorage(storageKey) {
  const initialListString = localStorage.getItem(storageKey);
  const initialList = JSON.parse(initialListString) || [];
  return initialList;
}
