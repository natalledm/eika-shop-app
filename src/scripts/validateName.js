export default function validateName(string) {
  const newString = string.trim();
  let error = false;
  if (newString.length === 0) {
    error = true;
    return { newString, error };
  }
  return { newString, error };
}
