export default function validateName(string) {
  const newString = string.trim();
  let error = false;
  if (newString.length === 0) {
    let error = true;
    return { newString, error };
  }
  return { newString, error };
}
