import { describe } from "mocha";
import { Calculator } from "../src/calculator";
import { expect } from "chai";
const calc = new Calculator();

describe("Test Calculator Class", () => {
  it("Should return Sum", () => {
    const calcSum = calc.add(2, 5);

    expect(calcSum).to.equal(7);
  });

  it("should return Subtraction", () => {
    const calSub = calc.substract(5, 2);

    expect(calSub).to.equal(3);
  });

  it("Should reverse input", () => {
    const calSub = calc.substract(2, 5);

    expect(calSub).to.equal(3);
  });

  it("Should return multiply", () => {
    const multiply = calc.multiply(2, 0);
    expect(multiply).to.equal(0);
  });

  it("Should return Error", () => {
    expect(() => calc.divide(2, 0)).to.throw("can not divide by zero");
  });

  it("Should return divide", () => {
    const divide = calc.divide(2, 1);
    expect(divide).to.equal(2);
  });
});
