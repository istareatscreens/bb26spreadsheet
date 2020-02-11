//Checks for valid bb26 format
export function checkIfValidbb26(input: string): void {
  if (!/^[A-Z]+$/.test(input))
    throw new TypeError("Input string may only contain upper case letters");
}

//Returns 1 if a is larger than b
//Returns 2 if b is larger than a
//Returns 0 if both are equal
export function bb26Compare(a: string, b: string): number {
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
