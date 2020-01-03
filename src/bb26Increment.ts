export default function bb26Increment(input: string): string {
  if (!/^[A-Z]+$/.test(input))
    throw new TypeError("Input string may only contain upper case letters");
  let temp: string = "";
  for (let i = input.length - 1; i > -1; i--) {
    if (input[i] !== "Z") {
      temp = String.fromCharCode(input.charCodeAt(i) + 1) + temp;
      input = input.slice(0, i) + temp;
      return input;
    } else {
      temp += "A";
    }
  }
  return temp + "A";
}
