import { expect } from "chai";
import { Calculator } from "../src/calculator";

const payload = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
const calc = new Calculator();

describe.only("API TEST", () => {
  it("should make get request", async () => {
    const resp = await calc.getUser();

    expect(resp.status).to.equal(200);
    // expect(resp).to.be.a("array");
  });

  it("Should post request", async () => {
    const resp = await calc.saveUser();

    expect(resp.status).to.equal(201);
    expect(resp.id).to.be.a("undefined");
    expect(resp).to.be.a("object");
  });
});
