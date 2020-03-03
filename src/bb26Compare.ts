import { checkIfValidbb26 as check } from "./bb26Check";

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
  if (getbb26Comparison(a, b) === 1) {
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
  if (getbb26Comparison(a, b) === 2) {
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
  if (getbb26Comparison(a, b) === 0) {
    return true;
  } else {
    return false;
  }
}

/**
 * Returns a number value of 1 if first input > second input,
 * 2 if second input > first input
 * 0 if first input == second input
 * @param {string} a string containing only uppercase letters
 * @param {string} b string containing only uppercase letters
 * @return {number} a number equal to 0 or 1 or 2
 * @Example bb26Compare("D", "B") //1
 * @Example bb26Compare("A", "ZZ") //2
 * @example bb26Compare("C","C") // 0
 */
export function bb26Compare(a: string, b: string): number {
  check(a);
  check(b);
  return getbb26Comparison(a, b);
}

//Returns 1 if a is larger than b
//Returns 2 if b is larger than a
//Returns 0 if both are equal
export function getbb26Comparison(a: string, b: string): number {
  if (a.length > b.length) {
    return 1;
  } else if (b.length > a.length) {
    return 2;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a.charCodeAt(i) > b.charCodeAt(i)) {
        return 1;
      } else if (b.charCodeAt(i) > a.charCodeAt(i)) {
        return 2;
      } else;
    }
  }
  return 0;
}
