import express from 'express';

export default class ExpressApplication {
  private readonly app: express.Application;

  constructor () {
    this.app = express();
  }
}
