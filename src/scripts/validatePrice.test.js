import validatePrice from "./validatePrice";

it("Should pass if input is correct", () => {
  // Arrange
  const testValidPrice = "100";
  const resultPrice = 100;
  const resultError = false;

  // Act
  const validation = validatePrice(testValidPrice);

  // Assert
  expect(validation.newNumber).toBe(resultPrice);
  expect(validation.error).toBe(resultError);
});

it("Should fail if price is empty", () => {
  const testValidPrice = "";
  const resultPrice = 0;
  const resultError = true;

  const validation = validatePrice(testValidPrice);

  expect(validation.newNumber).toBe(resultPrice);
  expect(validation.error).toBe(resultError);
});

it("Should fail if price is zero", () => {
  const testValidPrice = "0";
  const resultPrice = 0;
  const resultError = true;

  const validation = validatePrice(testValidPrice);

  expect(validation.newNumber).toBe(resultPrice);
  expect(validation.error).toBe(resultError);
});

it("Should fail if price is a negative number", () => {
  const testValidPrice = "-1";
  const resultPrice = -1;
  const resultError = true;

  const validation = validatePrice(testValidPrice);

  expect(validation.newNumber).toBe(resultPrice);
  expect(validation.error).toBe(resultError);
});
