/**
 * Converts decimal numbers starting at 1 to bijective base-26 uppercase letter strings
 * @param {number} input natural number
 * @returns {string} bijective base-26 upper case letter string
 * @example decimalTobb26(1) //A
 * @example decimalTobb26(497) //SC
 */
export default function decimalTobb26(input: number): string {
  if (!/^(0|([1-9]\d*))$/.test(input.toString()) || input === 0)
    throw new TypeError("Input number may only contain natural numbers values");
  return rdecimalTobb26(input);
}

function rdecimalTobb26(input: number, sum: string = ""): string {
  return input !== 0
    ? rdecimalTobb26(
        Math.floor((input - 1) / 26),
        String.fromCharCode(64 + (input % 26 || 26)) + sum
      )
    : sum;
}
