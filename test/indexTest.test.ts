import { bb26ToDecimal } from "../src/index";
import {
    describeWraper,
    inputTest,
    invalidInputTest
} from "./testingFunctions";
import {
    bb26toDecimalInputTest,
    bb26toDecimalInvalidInputTest
} from "./testObjects";

describeWraper(
    "bb26ToDecimal",
    inputTest(bb26toDecimalInputTest, bb26ToDecimal),
    invalidInputTest(bb26toDecimalInvalidInputTest, bb26ToDecimal)
);
