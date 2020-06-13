/**
 * Checks for valid bb26 format, capital letters with no spaces. Throws
 * TypeError on invalid input
 * @param {input} input string containing only uppercase letters
 * @param {boolean} surpressError controls if an error is thrown if not set
 *     throws error, if set to true throws no error and returns false
 * @return {boolean} returns true if valid or if surpresserror not set to true
 *     then throws error
 * @Example isValidbb26("AA") //Execution continues returns true
 * @Example isValidbb26("Aa", true) //returns false
 * @Example isValidbb26("AA", true) //returns true
 * @Example isValidbb26("AA") //Execution continues returns true
 * @Example isValidbb26("A1") //Throws TypeError
 */
export function checkIfValidbb26(
    input: string, surpressError: boolean = false): boolean {
  if (!/^[A-Z]+$/.test(input)) {
    if (surpressError) return false;
    throw new TypeError('Input string may only contain upper case letters');
  }
  return true;
}
