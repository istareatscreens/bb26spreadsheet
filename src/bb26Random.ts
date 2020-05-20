import { bb26Compare } from "./bb26Compare";
import decimalCheck from "./decimalCheck";
import { rbb26ToDecimal as bb26ToDecimal } from "./bb26ToDecimal";
import { rdecimalTobb26 as decimalTobb26 } from "./decimalTobb26";

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
