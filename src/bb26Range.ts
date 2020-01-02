import bb26ToDecimal from "./bb26ToDecimal";
import bb26Increment from "./bb26Increment";

export default function bb26Range(a: string, b: string = ""): string[] {
  if (!/^[A-Z]+$/.test(a) || (!/^[A-Z]+$/.test(b) && b !== ""))
    throw new TypeError("Input strings may only contain upper case letters");
  if (a == b || (a === "A" && b === "")) return [a];
  let stringArr = ["A"];
  let U = a;
  if (b !== "") {
    if (bb26ToDecimal(a) > bb26ToDecimal(b)) {
      stringArr[0] = b;
    } else {
      U = b;
      stringArr[0] = a;
    }
  }
  while (stringArr.length < 1000000) {
    stringArr.push(bb26Increment(stringArr[stringArr.length - 1]));
    if (stringArr[stringArr.length - 1] === U) return stringArr;
  }
  throw new Error("Function could not complete");
}
