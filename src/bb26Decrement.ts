/**
 * Decreases a bijective base-26 number by 1
 * @param input {string} string containing only uppercase letters
 * @returns {string} Bijective base-26 input - 1
 * @Example bb26Decrement("B") //"A"
 * @Example bb26Decrement("AA") //"Z"
 */
export default function bb26Decrement(input: string): string {
  if (!/^[A-Z]+$/.test(input))
    throw new TypeError("Input string may only contain upper case letters");
  let temp: string = "";
  for (let i = input.length - 1; i > -1; i--) {
    if (input[i] !== "A") {
      temp = String.fromCharCode(input.charCodeAt(i) - 1) + temp;
      input = input.slice(0, i) + temp;
      return input;
    } else {
      temp += "Z";
    }
  }
  return input === "A" ? "A" : temp.slice(0, temp.length - 1);
}
