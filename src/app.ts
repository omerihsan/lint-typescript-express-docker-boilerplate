import express from "express";

export default class ExpressApplication {
  private readonly app: express.Application;

  #a = "abc";

  constructor() {
    this.app = express();
  }

  private static test(a: string): void {
    console.log("abc", a);
  }

  private static test1(): void {
    console.log("abc");
  }
}
