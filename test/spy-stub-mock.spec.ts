import { describe } from "mocha";
import { expect } from "chai";
import { Calculator } from "../src/calculator";
import sinon, { SinonMock, SinonSpy, SinonStub } from "sinon";
const calc = new Calculator();

describe("Sinon test", () => {
  let spy: SinonSpy;
  // let stub: SinonStub;
  let mock: SinonMock;
  before(() => {
    console.log("before should appear 1");
  });
  beforeEach(() => {
    console.log("before each should appear 2");
  });

  it("Should return Sum", () => {
    spy = sinon.spy(calc, "add");
    // stub = sinon.stub(calc, "getRandomValue").returns(2);
    mock = sinon.mock(calc);
    let expectaions = mock
      .expects("logValue")
      .exactly(1)
      .withArgs("mocking inside sum");
    const calcSum = calc.add(2, 5);

    expect(calcSum).to.be.a("number");
    expect(spy.calledOnceWith(2, 5)).to.be.true;
    expectaions.verify();
    spy.restore();
    // stub.restore();
    mock.restore();
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
