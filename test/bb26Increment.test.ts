import { expect } from "chai";
import "mocha";
import {
  bb26IncrementInputTest,
  bb26IncrementInvalidInputTest
} from "./testObjects";
import { bb26Increment } from "../src/index";

describe("#bb26Increment", function() {
  //input test
  bb26IncrementInputTest.forEach(({ input, result }) =>
    context("with argument " + input, function() {
      it("should return " + result, function() {
        expect(bb26Increment(input)).to.equal(result);
      });
    })
  );

  //invalid input test
  bb26IncrementInvalidInputTest.forEach(({ input, result, error }) =>
    context("with invalid inputs", function() {
      it("Should throw error " + error, function() {
        expect(function() {
          bb26Increment(input);
        }).to.throw(error, result);
      });
    })
  );
});
