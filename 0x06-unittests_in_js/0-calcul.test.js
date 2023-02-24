const assert = require("assert");
const calculateNumber = require('./0-calcul')

describe("round check", function() {
	it("floating point whole numbers", () => {
		assert.strictEqual(calculateNumber(1.0, 2.0), 3)
	});

	it('rounding down a', () => {
		assert.strictEqual(calculateNumber(1.0, 2.4), 3);
	});
});
