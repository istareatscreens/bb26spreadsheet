// eslint-disable-next-line no-unused-vars
import { testObject } from "./testingTypes";
import {
    bb26ToDecimal,
    decimalTobb26,
    bb26Range,
    bb26Increment,
    bb26Decrement
} from "../src/index";
import {
    describeWraper,
    inputTest,
    invalidInputTest
} from "./testingFunctions";
import {
    bb26toDecimalInputTest,
    bb26toDecimalInvalidInputTest,
    decimalTobb26InvalidInputTest,
    bb26RangeInputTest,
    bb26RangeInvalidInputTest,
    bb26DecrementInputTest,
    bb26DecrementInvalidInputTest,
    bb26IncrementInputTest,
    bb26IncrementInvalidInputTest
} from "./testObjects";

//bb26ToDecimal Tests
describeWraper(
    "bb26ToDecimal",
    inputTest(bb26toDecimalInputTest, bb26ToDecimal),
    invalidInputTest(bb26toDecimalInvalidInputTest, bb26ToDecimal)
);

//setup decimalTobb26 input testing objects
const decimalTobb26InputTest = bb26toDecimalInputTest.map(test => {
    const temp = test.input;
    return { input: test.result, result: temp };
});

//decimalTobb26 Tests
describeWraper(
    "decimalTobb26",
    inputTest(decimalTobb26InputTest, decimalTobb26),
    invalidInputTest(decimalTobb26InvalidInputTest, decimalTobb26)
);

//bb26Range Tests
describeWraper(
    "bb26Range",
    inputTest(bb26RangeInputTest, bb26Range),
    invalidInputTest(bb26RangeInvalidInputTest, bb26Range)
);

//bb26Increment Tests
describeWraper(
    "bb26Increment",
    inputTest(bb26IncrementInputTest, bb26Increment),
    invalidInputTest(bb26IncrementInvalidInputTest, bb26Increment)
);

//bb26bb26Decrement Tests
describeWraper(
    "bb26bb26Decrement",
    inputTest(bb26DecrementInputTest, bb26Decrement),
    invalidInputTest(bb26DecrementInvalidInputTest, bb26Decrement)
);
