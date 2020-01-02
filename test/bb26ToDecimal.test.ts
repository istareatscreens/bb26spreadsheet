import { expect } from "chai";
import "mocha";
import {
  bb26toDecimalInputTest,
  bb26toDecimalInvalidInputTest
} from "./testObjects";
import { bb26ToDecimal } from "../src/index";

describe("#bb26ToDecimal", function() {
  //input test
  bb26toDecimalInputTest.forEach(({ input, result }) =>
    context("with argument " + input, function() {
      it("should return " + result, function() {
        expect(bb26ToDecimal(input)).to.equal(result);
      });
    })
  );

  //invalid input test
  bb26toDecimalInvalidInputTest.forEach(({ input, result, error }) =>
    context("with invalid inputs " + input, function() {
      it("Should throw error " + error, function() {
        expect(function() {
          bb26ToDecimal(input);
        }).to.throw(error!, result);
      });
    })
  );
});
