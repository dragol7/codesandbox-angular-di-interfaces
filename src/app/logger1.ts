import { Logger } from "./logger.interface";

export class Logger1 implements Logger {
  log(msg: string): void {
    console.log(`cao ${msg}`);
  }
}
