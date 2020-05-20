import { expect } from "chai";
import "mocha";
import {
  bb26toDecimalInputTest,
  bb26toDecimalInvalidInputTest,
} from "./testObjects";
import { isValidbb26 } from "../src/index";

describe("#isValidbb26", function () {
  //input test
  bb26toDecimalInputTest.forEach(({ input }) =>
    context("with argument " + input, function () {
      it("should return void", function () {
        expect(isValidbb26(input)).to.be.undefined;
      });
    })
  );

  //invalid input test
  bb26toDecimalInvalidInputTest.forEach(({ input, result, error }) =>
    context("with invalid inputs " + input, function () {
      it("Should throw error " + error, function () {
        expect(function () {
          isValidbb26(input);
        }).to.throw(error!, result);
      });
    })
  );
});
