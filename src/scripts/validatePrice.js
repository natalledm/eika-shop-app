export default function validatePrice(number) {
  let error = false;
  let newNumber = Number(number.trim());
  if (newNumber === 0) {
    error = true;
    return { newNumber, error };
  } else if (newNumber < 0) {
    error = true;
    return { newNumber, error };
  }
  return { newNumber, error };
}
