export function isValidNumber(numberString) {
  const regex = /^\d{13}$/;
  return regex.test(numberString);
}

export function parseCardNumber(cardNumber) {
  const c = cardNumber.split("");
  let cardNumberFormatted = `${c[0]}${c[1]}.${c[2]}${c[3]}-${c
    .slice(4, 12)
    .join("")}-${c[12]}`;
  return cardNumberFormatted;
}

export function unparseCardNumber(cardNumberFormatted) {
  const charsToRemove = [".", "-"];
  return cardNumberFormatted
    .split("")
    .filter((char) => !charsToRemove.includes(char))
    .join("");
}
