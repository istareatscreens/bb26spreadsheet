import decimalCheck from "./decimalCheck";

/**
 * Converts decimal numbers starting at 1 to bijective base-26 uppercase letter strings
 * @param {number} input natural number
 * @returns {string} Bijective base-26 upper case letter string conversion of input number
 * @example decimalTobb26(1) //A
 * @example decimalTobb26(497) //SC
 */
export default function decimalTobb26(input: number): string {
  decimalCheck(input);
  return rdecimalTobb26(input);
}

/**
 * performs recursive operation
 *@param {number} input natural number greater than 0
 *@param {string} sum summation variable default empty string
 *@returns {number} returns upper case letter string bijective base-26 value
 */
export function rdecimalTobb26(input: number, sum: string = ""): string {
  return input !== 0
    ? rdecimalTobb26(
        Math.floor((input - 1) / 26),
        String.fromCharCode(64 + (input % 26 || 26)) + sum
      )
    : sum;
}
