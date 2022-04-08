import validateName from "./validateName";

it("Should pass if input is correct", () => {
  // Arrange
  const testValidName = "Chair";
  const resultName = "Chair";
  const resultError = false;

  // Act
  const validation = validateName(testValidName);

  // Assert
  expect(validation.newString).toBe(resultName);
  expect(validation.error).toBe(resultError);
});

it("Should fail if input is empty", () => {
  const testName = "";
  const resultName = "";
  const resultError = true;

  const validation = validateName(testName);

  expect(validation.newString).toBe(resultName);
  expect(validation.error).toBe(resultError);
});

it("Should fail if input is empty spaces", () => {
  const testName = "     ";
  const resultName = "";
  const resultError = true;

  const validation = validateName(testName);

  expect(validation.newString).toBe(resultName);
  expect(validation.error).toBe(resultError);
});
