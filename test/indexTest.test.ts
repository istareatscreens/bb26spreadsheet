import { bb26ToDecimal } from "../src/index";
import { expect } from "chai";
import "mocha";

describe("bb26ToDecimal Input Check", () => {
  it("should return equivalent numbers", () => {
    const result = bb26ToDecimal("A");
    expect(result).to.equal(1);
  });
});
