import { bb26ToDecimal } from "../src/index";
import { expect } from "chai";
import "mocha";
import {
    bb26toDecimalInputTest,
    bb26toDecimalInvalidInputTest
} from "./testVariables.json";

//object type
interface testObject {
    input: any;
    result: any;
    error?: any;
}

describeWraper(
    "bb26ToDecimal",
    inputTest(bb26toDecimalInputTest, bb26ToDecimal),
    invalidInputTest(bb26toDecimalInvalidInputTest, bb26ToDecimal)
);

function describeWraper(functionName: string, ...fns: (() => void)[]) {
    describe("#" + functionName, () => {
        fns.forEach(fn => fn());
    });
}

function inputTest(arr: testObject[], fn: (...args: any) => any): () => void {
    return () =>
        arr.forEach(test => {
            context("Input Check for " + test.input, () => {
                it("should return: " + test.result, () => {
                    expect(fn(test.input)).to.equal(test.result);
                });
            });
        });
}

function invalidInputTest(
    arr: testObject[],
    fn: (...args: any) => any
): () => void {
    return () => {
        arr.forEach(test => {
            context("With invalid input of " + test.input, () => {
                it("should throw error: " + test.result, () => {
                    expect(() => {
                        fn(test.input);
                    }).to.throw(test.error, test.result);
                });
            });
        });
    };
}
