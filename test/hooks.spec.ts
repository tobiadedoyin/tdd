import { describe } from "mocha";
import { expect, should } from "chai";
import { Calculator } from "../src/calculator";
const calc = new Calculator();

describe("Hooks test", () => {
  before(() => {
    console.log("before should appear 1");
  });
  beforeEach(() => {
    console.log("before each should appear 2");
  });

  it("Should return Sum", () => {
    const calcSum = calc.add(2, 5);

    expect(calcSum).to.equal(7);
  });

  it("should return Subtraction", () => {
    const calSub = calc.substract(5, 2);

    expect(calSub).to.equal(3);
  });

  afterEach(() => {
    console.log("after each should appear 2");
  });

  after(() => {
    console.log("after should appear 1");
  });
});
