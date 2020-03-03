import { expect } from "chai";
import "mocha";
import {
  bb26GTLTInputTest,
  bb26EqInputTest,
  bb26CompareInputTest
} from "./testObjects";
import { bb26Eq, bb26GT, bb26LT, bb26Compare } from "../src/index";

describe("#bb26GT", function() {
  //input test
  bb26GTLTInputTest.forEach(({ input, result }) =>
    context("with arguments " + input.a + " and " + input.b, function() {
      it("should return " + result, function() {
        expect(bb26GT(input.a, input.b)).to.equal(result);
      });
    })
  );
});

describe("#bb26LT", function() {
  //input test
  bb26GTLTInputTest.forEach(({ input, result }) =>
    context("with arguments " + input.a + " and " + input.b, function() {
      it("should return " + !result, function() {
        expect(bb26LT(input.a, input.b)).to.equal(
          input.a === input.b ? result : !result
        );
      });
    })
  );
});

describe("#bb26Eq", function() {
  //input test
  bb26EqInputTest.forEach(({ input, result }) =>
    context("with arguments " + input.a + " and " + input.b, function() {
      it("should return " + result, function() {
        expect(bb26Eq(input.a, input.b)).to.equal(result);
      });
    })
  );
});

describe("#bb26Compare", function() {
  //input test
  bb26CompareInputTest.forEach(({ input, result }) =>
    context("with arguments " + input.a + " and " + input.b, function() {
      it("should return " + result, function() {
        expect(bb26Compare(input.a, input.b)).to.equal(result);
      });
    })
  );
});
