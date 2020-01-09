import bb26ToDecimal from "./bb26ToDecimal";
import bb26Increment from "./bb26Increment";
/**
 * Returns a range from given inputs in increasing bijective base-26
 * @param {string} a string containing only uppercase letters
 * @param {string?} b Optional string containing only uppercase letters
 * @returns {string[]} Increasing order array of strings from [a to b] or ["A" to a]
 * @Example bb26Decrement("C") //["A", "B", "C"]
 * @Example bb26Decrement("AZ, BC") //["AZ","BA","BB","BC"]
 * @Example bb26Decrement("S, Q") //"["Q","R","S"]"
 */
export default function bb26Range(a: string, b: string = ""): string[] {
  if (!/^[A-Z]+$/.test(a) || (!/^[A-Z]+$/.test(b) && b !== ""))
    throw new TypeError("Input strings may only contain upper case letters");
  //variable configuration
  if (a == b || (a === "A" && b === "")) return [a];
  let stringArr: string[] = ["A"];
  let U: string = a;
  if (b !== "") {
    if (bb26ToDecimal(a) > bb26ToDecimal(b)) {
      stringArr[0] = b;
    } else {
      U = b;
      stringArr[0] = a;
    }
  }
  //execution
  // eslint-disable-next-line no-constant-condition
  while (true) {
    stringArr.push(bb26Increment(stringArr[stringArr.length - 1]));
    if (stringArr[stringArr.length - 1] === U) return stringArr;
  }
}
