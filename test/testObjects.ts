// eslint-disable-next-line no-unused-vars
import { testObject } from "./testingTypes";
//callback function to swap result with input in testObjects
const swapFunction = (test: testObject): testObject => {
  const temp = { ...test };
  return { input: temp.result, result: temp.input };
};

//error message variables
const bb26toDecimalEM = "Input string may only contain upper case letters";
const decimalTobb26EM = "Input number may only contain natural numbers values";
const bb26RangeEM = "Input strings may only contain upper case letters";

//setup bb26toDecimal testing objects
export const bb26toDecimalInputTest: testObject[] = [
  {
    input: "C",
    result: 3
  },
  {
    input: "E",
    result: 5
  },
  {
    input: "S",
    result: 19
  },
  {
    input: "CE",
    result: 83
  },
  {
    input: "SC",
    result: 497
  },
  {
    input: "ZZ",
    result: 702
  },
  {
    input: "AAZ",
    result: 728
  },
  {
    input: "ABC",
    result: 731
  },
  {
    input: "SSSS",
    result: 347301
  },
  {
    input: "AZAZA",
    result: 915305
  }
];
export const bb26toDecimalInvalidInputTest: testObject[] = [
  {
    input: "123",
    result: bb26toDecimalEM,
    error: TypeError
  },
  {
    input: "AbC",
    result: bb26toDecimalEM,
    error: TypeError
  },
  {
    input: "A b C",
    result: bb26toDecimalEM,
    error: TypeError
  },
  {
    input: "AB C",
    result: bb26toDecimalEM,
    error: TypeError
  }
];

//setup decimalTobb26 testing objects
export const decimalTobb26InputTest: testObject[] = bb26toDecimalInputTest.map(
  test => swapFunction(test)
);
export const decimalTobb26InvalidInputTest: testObject[] = [
  {
    input: Infinity,
    result: decimalTobb26EM,
    error: TypeError
  },
  {
    input: NaN,
    result: decimalTobb26EM,
    error: TypeError
  },
  {
    input: 5.5,
    result: decimalTobb26EM,
    error: TypeError
  },
  {
    input: -534,
    result: decimalTobb26EM,
    error: TypeError
  },
  {
    input: 0,
    result: decimalTobb26EM,
    error: TypeError
  }
];

//setup bb26Range testing objects
export const bb26RangeInputTest: testObject[] = [
  {
    input: { a: "C" },
    result: ["A", "B", "C"]
  },
  {
    input: { a: "A", b: "" },
    result: ["A"]
  },
  {
    input: { a: "A", b: "A" },
    result: ["A"]
  },
  {
    input: { a: "C", b: "" },
    result: ["A", "B", "C"]
  },
  {
    input: { a: "C", b: "" },
    result: ["A", "B", "C"]
  },
  {
    input: { a: "A", b: "B" },
    result: ["A", "B"]
  },
  {
    input: { a: "C", b: "A" },
    result: ["A", "B", "C"]
  },
  {
    input: { a: "B", b: "E" },
    result: ["B", "C", "D", "E"]
  },
  {
    input: { a: "AZ", b: "BC" },
    result: ["AZ", "BA", "BB", "BC"]
  },
  {
    input: { a: "Z", b: "AD" },
    result: ["Z", "AA", "AB", "AC", "AD"]
  },
  {
    input: { a: "ZZ", b: "AAC" },
    result: ["ZZ", "AAA", "AAB", "AAC"]
  },
  {
    input: { a: "AZZ", b: "BAC" },
    result: ["AZZ", "BAA", "BAB", "BAC"]
  }
];
export const bb26RangeInvalidInputTest = [
  {
    input: { a: "123", b: "" },
    result: bb26RangeEM,
    error: TypeError
  },
  {
    input: { a: "", b: "AbC" },
    result: bb26RangeEM,
    error: TypeError
  },
  {
    input: { a: "", b: "" },
    result: bb26RangeEM,
    error: TypeError
  },
  {
    input: { a: "A b C", b: "" },
    result: bb26RangeEM,
    error: TypeError
  },
  {
    input: { a: "a", b: "N" },
    result: bb26RangeEM,
    error: TypeError
  },
  {
    input: { a: "AB", b: "b" },
    result: bb26RangeEM,
    error: TypeError
  }
];

//setup bb26Increment testing objects
export const bb26IncrementInputTest: testObject[] = [
  {
    input: "C",
    result: "D"
  },
  {
    input: "AZ",
    result: "BA"
  },
  {
    input: "Z",
    result: "AA"
  },
  {
    input: "ZZ",
    result: "AAA"
  },
  {
    input: "ZB",
    result: "ZC"
  },
  {
    input: "ABC",
    result: "ABD"
  },
  {
    input: "ABCD",
    result: "ABCE"
  }
];
export const bb26IncrementInvalidInputTest: testObject[] = bb26toDecimalInvalidInputTest;

//setup bb26Compare testing objects
export const bb26GTLTInputTest: testObject[] = [
  {
    input: { a: "CC", b: "CC" },
    result: false
  },
  {
    input: { a: "A", b: "C" },
    result: false
  },
  {
    input: { a: "A", b: "A" },
    result: false
  },
  {
    input: { a: "C", b: "A" },
    result: true
  },
  {
    input: { a: "CC", b: "A" },
    result: true
  },
  {
    input: { a: "A", b: "BA" },
    result: false
  },
  {
    input: { a: "BB", b: "AA" },
    result: true
  },
  {
    input: { a: "BBB", b: "EEE" },
    result: false
  }
];

export const bb26EqInputTest: testObject[] = [
  {
    input: { a: "CC", b: "CC" },
    result: true
  },
  {
    input: { a: "A", b: "C" },
    result: false
  },
  {
    input: { a: "A", b: "A" },
    result: true
  },
  {
    input: { a: "C", b: "A" },
    result: false
  },
  {
    input: { a: "CC", b: "A" },
    result: false
  },
  {
    input: { a: "A", b: "BA" },
    result: false
  },
  {
    input: { a: "BB", b: "AA" },
    result: false
  },
  {
    input: { a: "BBB", b: "EEE" },
    result: false
  },
  {
    input: { a: "EEE", b: "EEE" },
    result: true
  }
];

//setup bb26Decrement testing objects
export const bb26DecrementInputTest: testObject[] = bb26IncrementInputTest
  .map(test => swapFunction(test))
  .map(a => ({ ...a }));
bb26DecrementInputTest.push({ input: "A", result: "A" });
export const bb26DecrementInvalidInputTest: testObject[] = bb26toDecimalInvalidInputTest;
