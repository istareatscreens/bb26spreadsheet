import { bb26Compare } from "./bb26Compare";
import decimalCheck from "./decimalCheck";
import { rbb26ToDecimal as bb26ToDecimal } from "./bb26ToDecimal";
import { rdecimalTobb26 as decimalTobb26 } from "./decimalTobb26";

/**
 * Returns a random number in bijective base-26 form inclusively between "A" and the single bijective base-26 number input or between both bijective base-26 number inputs
 * @param {string} a string containing only uppercase letters
 * @param {string?} b Optional string containing only uppercase letters defaults to "A"
 * @returns {string} A value bijective base-26number string in the set [a to b] or ["A" to a]
 * @Example bb26Random("C") //"A"
 * @Example bb26Random("AZ", "BC") //"BB"
 * @Example bb26Random("S", "Q") //"R"
 */
export function bb26Random(a: string, b: string = "A"): string {
  switch (bb26Compare(a, b)) {
    case 1:
      // A > B
      return getbb26Random(bb26ToDecimal(b), bb26ToDecimal(a));
    case 2:
      //A < B
      return getbb26Random(bb26ToDecimal(a), bb26ToDecimal(b));
    default:
      return a;
  }
}

/**
 * Returns a random number in bijective base-26 form inclusively between "1" and the single bijective base-26 number input or between both bijective base-26 number inputs
 * @param {number} a number greater than 1
 * @param {number?} b number greater than 1 defaults to 1
 * @returns {string} A bijective base-26 number string in the set [a to b] or ["A" to a]
 * @Example bb26Random("3") //"A"
 * @Example bb26Random(52, 55) //"BB"
 * @Example bb26Random(19, 24) //"R"
 */
export function numberbb26Random(a: number, b: number = 1): string {
  decimalCheck(a);
  decimalCheck(b);
  if (b > a) {
    return getbb26Random(a, b);
  } else if (b < a) {
    return getbb26Random(b, a);
  } else {
    return decimalTobb26(a);
  }
}

//where b > a
function getbb26Random(a: number, b: number): string {
  return decimalTobb26(
    Math.floor(Math.exp(Math.random() * (Math.log(b + 1) - Math.log(a))) * a)
  );
}
