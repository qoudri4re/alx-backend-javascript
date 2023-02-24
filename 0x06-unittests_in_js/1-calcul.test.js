const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("round check", function () {
  it("correct result for addition", () => {
    assert.strictEqual(calculateNumber("SUM", 1.0, 2.0), 3);
  });

  it("correct result for subtraction", () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 1.0, 2.4), -1);
  });
  it("correct result for division", () => {
    assert.strictEqual(calculateNumber("DIVISION", 1.4, 2.4), 0.5);
  });

  it("return error on zero division", () => {
    assert.strictEqual(calculateNumber(1.4, 0.0), "Error");
  });
});
