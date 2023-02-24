const assert = require("assert");
const calculateNumber = require("./1-calcul");
const { expect } = require("chai");

describe("calculateNumber", function () {
  describe('type == "SUM"', () => {
    it("correct result for addition", () => {
      expect(calculateNumber("SUM", 1.0, 2.0)).to.equal(3);
    });
  });
  describe('type == "SUBTRACT"', () => {
    it("correct result for subtraction", () => {
      expect(calculateNumber("SUBTRACT", 1.0, 2.4)).to.equal(-1);
    });
  });
  describe('type == "DIVISION"', () => {
    it("correct result for division", () => {
      expect(calculateNumber("DIVISION", 1.4, 2.4)).to.equal(0.5);
    });
    it("return error on zero division", () => {
      expect(calculateNumber(1.4, 0.0)).to.equal("Error");
    });
  });
});
