export default function decimalCheck(input: number): void {
  if (!/^(0|([1-9]\d*))$/.test(input.toString()) || input === 0)
    throw new TypeError("Input number may only contain natural numbers values");
}
