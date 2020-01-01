import { expect } from "chai";
import "mocha";
import { bb26RangeInputTest, bb26RangeInvalidInputTest } from "./testObjects";
import { bb26Range } from "../src/index";

describe("#bb26Range", function() {
  //input test
  bb26RangeInputTest.forEach(({ input, result }) =>
    context("with argument " + input, function() {
      const { a, b } = input;
      it("should return " + result, function() {
        expect(bb26Range(a, b)).to.equal(result);
      });
    })
  );

  //invalid input test
  bb26RangeInvalidInputTest.forEach(({ input, result, error }) =>
    context("with invalid inputs", function() {
      const { a, b } = input;
      it("Should throw error " + error, function() {
        expect(function() {
          bb26Range(a, b);
        }).to.throw(error, result);
      });
    })
  );
});
