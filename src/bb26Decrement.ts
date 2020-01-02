export default function bb26Decrement(input: string): string {
  if (!/^[A-Z]+$/.test(input))
    throw new TypeError("Input string may only contain upper case letters");
  let temp = "";
  for (let i = input.length - 1; i > -1; i--) {
    if (input[i] !== "A") {
      temp = String.fromCharCode(input.charCodeAt(i) - 1);
      input = input.slice(0, i) + temp;
      return input;
    } else {
      temp += "Z";
    }
  }
  return input === "A" ? "A" : temp.slice(0, temp.length - 1);
}
