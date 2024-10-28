import { expect } from "chai";
import { Calculator } from "../src/calculator";

describe.only("Async Await", () => {
  let calc: Calculator;

  it("test async await", async () => {
    calc = new Calculator();

    let result = await calc.asyncFuncton();
    expect(result).to.be.a("number");
    expect(result).to.be.equal(4);
  });
});
