import { expect } from "chai";
import "mocha";
import { bb26ToDecimal } from "../src/index";
import { bb26RandomInputTest, bb26RandomInvalidInputTest } from "./testObjects";
import { bb26Random } from "../src/index";
import { numberbb26Random } from "../src/index";

let numberOfIterations = 1000;

function binarySearch(arr, target) {
  //if array is size 1
  if (arr.length == 1) return arr[0] == target ? true : false;
  target = bb26ToDecimal(target);
  //binary search
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (bb26ToDecimal(arr[mid]) === target) {
      return true;
    }
    if (bb26ToDecimal(arr[mid]) < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

function checkNumberOfArgs(a, b, func, conversionFunc = (a) => a) {
  return typeof b == "undefined" || b == ""
    ? func(conversionFunc(a))
    : func(conversionFunc(a), conversionFunc(b));
}

describe("#bb26Random", function () {
  //input test
  bb26RandomInputTest.forEach(({ input, result }) =>
    context("with argument " + input.a + ", " + input.b, function () {
      const { a, b } = input;
      for (let i = 0; i < numberOfIterations; i++) {
        let value = checkNumberOfArgs(a, b, bb26Random);
        it(
          "should return " +
            "with: " +
            a +
            " and " +
            b +
            "given " +
            value +
            " with the return value of " +
            value +
            " the value " +
            true,
          function () {
            expect(binarySearch(result, value)).to.be.true;
          }
        );
      }
    })
  );

  //  invalid input test
  bb26RandomInvalidInputTest.forEach(({ input, result, error }) =>
    context("with invalid inputs " + input.a + ", " + input.b, function () {
      const { a, b } = input;
      it("Should throw error " + error, function () {
        expect(function () {
          checkNumberOfArgs(a, b, bb26Random);
        }).to.throw(error!, result);
      });
    })
  );
});

describe("#numberbb26Random", function () {
  //input test for number input
  bb26RandomInputTest.forEach(({ input, result }) =>
    context(
      typeof input.b == "undefined" || input.b == ""
        ? "with argument " + bb26ToDecimal(input.a)
        : "with argument " +
            bb26ToDecimal(input.a) +
            ", " +
            bb26ToDecimal(input.b),
      function () {
        const { a, b } = input;
        for (let i = 0; i < numberOfIterations; i++) {
          let value = checkNumberOfArgs(a, b, numberbb26Random, bb26ToDecimal);
          it(
            "should return " +
              "with: " +
              a +
              " and " +
              b +
              " returning the value " +
              true +
              " for " +
              value,
            function () {
              expect(binarySearch(result, value)).to.be.true;
            }
          );
        }
      }
    )
  );

  context("with argument " + 5 + ", " + 1000, function () {
    for (let i = 0; i < numberOfIterations; i++) {
      let value = bb26ToDecimal(numberbb26Random(1000, 5));
      it(
        "should return a random number " +
          "between: " +
          5 +
          " and " +
          1000 +
          " number returned: " +
          value,
        function () {
          for (let i = 0; i < numberOfIterations; i++)
            expect(value).to.be.lessThan(1001).and.greaterThan(4);
        }
      );
    }
  });

  //  invalid input test
  bb26RandomInvalidInputTest.forEach(({ input, result, error }) =>
    context("with invalid inputs " + input.a + ", " + input.b, function () {
      const { a, b } = input;
      it("Should throw error " + error, function () {
        expect(function () {
          checkNumberOfArgs(a, b, bb26Random, bb26ToDecimal);
        }).to.throw(error!, result);
      });
    })
  );
});
