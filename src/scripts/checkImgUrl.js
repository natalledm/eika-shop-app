export default function checkImgUrl(string, imageIcon) {
  let newSrc = "";
  if (string.length === 0) {
    newSrc = imageIcon;
  } else {
    newSrc = string;
  }
  return newSrc;
}
