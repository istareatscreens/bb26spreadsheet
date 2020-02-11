import { checkIfValidbb26 as check, bb26Compare } from "./helperFunctions";

/**
 * Returns a boolean value of true  if first bb26 number argument is greater than second
 * @param {string} a string containing only uppercase letters
 * @param {string} b string containing only uppercase letters
 * @return {boolean} true or false
 * @Example bb26GT("AA", "BZ") //true
 * @Example bb26GT("A", "ZZ") //false
 */
export function bb26GT(a: string, b: string): boolean {
  check(a);
  check(b);
  if (bb26Compare(a, b) === 1) {
    return true;
  } else {
    return false;
  }
}

/**
 * Returns a boolean value of true  if first bb26 number argument is less than second
 * @param {string} a string containing only uppercase letters
 * @param {string} b string containing only uppercase letters
 * @return {boolean} true or false
 * @Example bb26LT("AA", "BZ") //false
 * @Example bb26LT("A", "ZZ") //true
 */
export function bb26LT(a: string, b: string): boolean {
  check(a);
  check(b);
  if (bb26Compare(a, b) === 2) {
    return true;
  } else {
    return false;
  }
}

/**
 * Returns a boolean value of true if first bb26 number argument is equal to the second
 * @param {string} a string containing only uppercase letters
 * @param {string} b string containing only uppercase letters
 * @return {boolean} true or false
 * @Example bb26Eq("AA", "AA") //true
 * @Example bb26Eq("A", "ZZ") //false
 */
export function bb26Eq(a: string, b: string): boolean {
  check(a);
  check(b);
  if (bb26Compare(a, b) === 0) {
    return true;
  } else {
    return false;
  }
}
