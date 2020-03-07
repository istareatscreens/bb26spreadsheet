/**
 * Checks for valid bb26 format, capital letters with no spaces. Throws TypeError on invalid input
 * @param {string} a string containing only uppercase letters
 * @return {void}
 * @Example isValidbb26("AA") //Execution continues
 * @Example isValidbb26("A1") //Throws TypeError
 */
export function checkIfValidbb26(input: string): void {
  if (!/^[A-Z]+$/.test(input))
    throw new TypeError("Input string may only contain upper case letters");
}
