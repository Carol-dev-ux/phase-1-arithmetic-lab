const chai = require('chai');
const expect = chai.expect;
const { multiply, random, mod, max } = require('../index'); // Assuming index.js is in the parent directory

describe('index.js', function () {
  describe('multiply', function () {
    it("is an equation whose multiplied results will equal 62", function () {
      const num1 = 31;
      const num2 = 2;
      expect(num1).to.be.a('number');
      expect(num2).to.be.a('number');
      expect(multiply(num1, num2)).to.eq(62);
    });
  });

  describe('random', function () {
    it("generates a random integer greater than 0", function () {
      const randomValue = random();
      expect(Number.isInteger(randomValue)).to.be.true;
      expect(randomValue).to.be.greaterThan(0);
    });
  });

  describe('mod', function () {
    it("is an equation that calculates a remainder that is equal to 4", function () {
      const num3 = 20;
      const num4 = 8;
      expect(num3).to.be.a('number');
      expect(num4).to.be.a('number');
      expect(mod(num3, num4)).to.eq(4);
    });
  });

  describe('max', function () {
    it("will return 20 as the highest number in the set", function () {
      const result = max(10, 15, 20, 8);
      expect(result).to.eq(20);
    });
  });
});
