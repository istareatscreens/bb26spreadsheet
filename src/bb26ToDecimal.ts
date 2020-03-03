import { checkIfValidbb26 as check } from "./bb26Check";
/**
 *Converts string containing only upper case letters (bijective base-26 form) to its equivalent decimal number
 *@param {string} input string containing only upper case letters
 *@returns {number} Decimal number conversion of bijective base-26 upper case letter input
 *@example bb26ToDecimal("AZ"); // output: 52
 */
export default function bb26ToDecimal(input: string): number {
  check(input);
  return rbb26ToDecimal(input);
}

/**
 * performs recursive operation
 *@param {string} input string containing only upper case letters
 *@param {number} sum summation variable default 0
 *@returns {number} returns decimal number conversion of bijective base-26 input
 */
function rbb26ToDecimal(input: string, sum: number = 0): number {
  return input.length > 0
    ? rbb26ToDecimal(
        input.substr(1),
        sum +
          (input.charAt(0).charCodeAt(0) - 64) * Math.pow(26, input.length - 1)
      )
    : sum;
}
