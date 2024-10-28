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
}
