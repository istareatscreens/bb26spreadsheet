/**
 *converts string containing only upper case letters to its equivalent decimal number using recursion
 *@param {string} input string containing only upper case letters
 *@returns {number} returns decimal number conversion of bijective base-26 upper case letter input
 *@example bb26ToDecimal("AZ"); // output: 52
 */
export default function bb26ToDecimal(input: string): number {
    if (!/^[A-Z]+$/.test(input))
        throw new TypeError("Input string may only contain upper case letters");
    return rbb26ToDecimal(input);
}

/**
 * performs recursive operation
 *@param {string} input string containing only upper case letters
 *@param {number} iterative recursion summation variable default 0
 *@returns {number} returns decimal number conversion of bijective base-26 input
 */
function rbb26ToDecimal(input: string, sum: number = 0): number {
    return input.length > 0
        ? rbb26ToDecimal(
              input.substr(1),
              sum +
                  (input.charAt(0).charCodeAt(0) - 64) *
                      Math.pow(26, input.length - 1)
          )
        : sum;
}
