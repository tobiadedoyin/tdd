import { expect, should } from "chai";

describe("Assert style", () => {
  it("assertion style", () => {
    const name: string = "hamid";
    const age: number = 90;
    const obj: object = {
      name,
      age,
    };
    const arr: Array<number> = [age, 50];
    const bool: boolean = true;

    expect(name).to.be.ok;
    expect(name).to.be.equal("hamid");
    expect(name).to.be.a("string");
    expect(age).to.be.ok;
    expect(age).to.be.equal(90);
    expect(age).to.be.a("number");
    expect(obj).to.be.ok;
    expect(obj).to.have.property("name").equal("hamid");
    expect(obj).to.have.property("age").equal(90);
    expect(obj).to.be.a("object");
    expect(arr).to.be.ok;
    expect(arr).to.be.a("array");
    expect(arr).to.have.length(2).that.include(age);
    expect(bool).to.be.ok;
    expect(bool).to.be.equal(true);
    expect(bool).to.be.a("boolean");
  });

  it("should style", () => {
    should();
    const name: string = "hamid";
    const age: number = 90;
    const obj: object = {
      name,
      age,
    };
    const arr: Array<number> = [age, 50];
    const bool: boolean = true;

    name.should.be.ok;
    name.should.be.equal("hamid");
    name.should.be.a("string");
    age.should.be.ok;
    age.should.be.equal(90);
    age.should.be.a("number");
    obj.should.be.ok;
    obj.should.have.property("name").equal("hamid");
    obj.should.have.property("age").equal(90);
    obj.should.be.a("object");
    arr.should.be.ok;
    arr.should.be.a("array");
    arr.should.have.length(2).that.include(age);
    bool.should.be.ok;
    bool.should.be.equal(true);
    bool.should.be.a("boolean");
  });
});
