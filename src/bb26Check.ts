//Checks for valid bb26 format
export function checkIfValidbb26(input: string): void {
  if (!/^[A-Z]+$/.test(input))
    throw new TypeError("Input string may only contain upper case letters");
}
