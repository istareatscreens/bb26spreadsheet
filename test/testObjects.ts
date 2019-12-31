// eslint-disable-next-line no-unused-vars
import { testObjectsType } from "./testingTypes";

const bb26toDecimalEM = "Input string may only contain upper case letters";
const decimalTobb26EM = "Input number may only contain natural numbers values";
const bb26RangeEM = "Input strings may only contain upper case letters";
//stores testing inputs/outputs
const testObjects: testObjectsType = {
    bb26toDecimalInputTest: [
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
            input: "ZZA",
            result: 18253
        },
        {
            input: "SSSS",
            result: 347301
        },
        {
            input: "AZAZA",
            result: 915305
        },
        {
            input: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            result: 2.5609457453661776e35
        }
    ],
    bb26toDecimalInvalidInputTest: [
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
            input: 123,
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
    ],
    decimalTobb26InvalidInputTest: [
        {
            input: "Aasd",
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
    ],
    bb26RangeInputTest: [
        {
            input: "C",
            result: ["A", "B", "C"]
        },
        {
            input: ["A", "B"],
            result: ["A", "B"]
        },
        {
            input: ["C", "A"],
            result: ["A", "B", "C"]
        },
        {
            input: ["B", "E"],
            result: ["B", "C", "D", "E"]
        },
        {
            input: ["AZ", "BC"],
            result: ["AZ", "BA", "BB", "BC"]
        },
        {
            input: ["Z", "AD"],
            result: ["Z", "AA", "AB", "AC", "AD"]
        },
        {
            input: ["ZZ", "AAC"],
            result: ["ZZ", "AAA", "AAB", "AAC"]
        },
        {
            input: ["AZZ", "BAC"],
            result: ["AZZ", "BAA", "BAB", "BAC"]
        }
    ],
    bb26RangeInvalidInputTest: [
        {
            input: "123",
            result: bb26RangeEM,
            error: TypeError
        },
        {
            input: "AbC",
            result: bb26RangeEM,
            error: TypeError
        },
        {
            input: 123,
            result: bb26RangeEM,
            error: TypeError
        },
        {
            input: "A b C",
            result: bb26RangeEM,
            error: TypeError
        },
        {
            input: "AB C",
            result: bb26RangeEM,
            error: TypeError
        },
        {
            input: ["AB", 3],
            result: bb26RangeEM,
            error: TypeError
        }
    ],
    bb26DecrementInputTest: [],
    bb26DecrementInvalidInputTest: [],
    bb26IncrementInputTest: [],
    bb26IncrementInvalidInputTest: []
};

export const {
    bb26toDecimalInputTest,
    bb26toDecimalInvalidInputTest,
    decimalTobb26InvalidInputTest,
    bb26RangeInputTest,
    bb26RangeInvalidInputTest,
    bb26DecrementInputTest,
    bb26DecrementInvalidInputTest,
    bb26IncrementInputTest,
    bb26IncrementInvalidInputTest
} = testObjects;
