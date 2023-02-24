const assert = require("assert");
const calculateNumber = require("./1-calcul");
const { expect } = require("chai");

describe("calculateNumber", function () {
  describe('type == "SUM"', () => {
    it("correct result for addition", () => {
      expect(calculateNumber("SUM", 1.0, 2.0)).to.equal(3);
    });
    it("equal positive numbers (alternate)", () => {
      expect(calculateNumber("SUM", 2.3, 1.8)).to.equal(4);
    });

    it("equal negative numbers", () => {
      expect(calculateNumber("SUM", -2.0, -2.0)).to.equal(-4);
    });

    it("equal negative numbers (alternate)", () => {
      expect(calculateNumber("SUM", -2.3, -1.8)).to.equal(-4);
    });

    it("negative and positive numbers", () => {
      expect(calculateNumber("SUM", -2.0, 2.0)).to.equal(0);
    });
  });
  describe('type == "SUBTRACT"', () => {
    it("correct result for subtraction", () => {
      expect(calculateNumber("SUBTRACT", 1.0, 2.4)).to.equal(-1);
    });
    it("equal positive numbers (alternate)", () => {
      expect(calculateNumber("SUBTRACT", 2.3, 1.8)).to.equal(0);
    });

    it("equal negative numbers", () => {
      expect(calculateNumber("SUBTRACT", -2.0, -2.0)).to.equal(0);
    });

    it("equal negative numbers (alternate)", () => {
      expect(calculateNumber("SUBTRACT", -2.3, -1.8)).to.equal(0);
    });

    it("negative and positive numbers", () => {
      expect(calculateNumber("SUBTRACT", -2.0, 2.0)).to.equal(-4.0);
    });
  });
  describe('type == "DIVIDE"', () => {
    it("numbers with different signs", () => {
      expect(calculateNumber("DIVIDE", -7.0, 2.0)).to.equal(-3.5);
    });

    it("numbers with different signs", () => {
      expect(calculateNumber("DIVIDE", -7.0, 2.0)).to.equal(-3.5);
    });
    it("numbers with different signs", () => {
      expect(calculateNumber("DIVIDE", -7.0, 2.0)).to.equal(-3.5);
    });
    it("numbers with different signs", () => {
      expect(calculateNumber("DIVIDE", -7.0, 2.0)).to.equal(-3.5);
    });
    it("numbers with different signs", () => {
      expect(calculateNumber("DIVIDE", -7.0, 2.0)).to.equal(-3.5);
    });
  });
});
