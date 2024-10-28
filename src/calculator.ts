import { rejects } from "assert";
import axios from "axios";
import { resolve } from "dns";

export class Calculator {
  add(num1: number, num2: number): number {
    this.logValue("mocking inside sum");
    // const c = this.getRandomValue();
    return num1 + num2;
  }

  substract(num1: number, num2: number): number {
    if (num2 > num1) {
      return num2 - num1;
    }

    return num1 - num2;
  }

  multiply(num1: number, num2: number): number {
    return num1 * num2;
  }

  divide(num1: number, num2: number): number {
    if (num2 === 0) {
      throw new Error("can not divide by zero");
    }

    return num1 / num2;
  }

  // getRandomValue(): number {
  //   return Math.floor(Math.random() * 10);
  // }
  logValue(msg: string): void {
    console.log(msg);
  }

  asyncFuncton() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(4);
      }, 1000);
    });
  }

  async getUser(): Promise<any> {
    return await axios.get("https://jsonplaceholder.typicode.com/users");
  }

  async saveUser(): Promise<any> {
    const post = {
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
    return await axios.post("https://jsonplaceholder.typicode.com/users", post);
  }
}
