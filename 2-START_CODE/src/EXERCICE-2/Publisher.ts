// TODO

import { Library } from "./Library";

// Publisher class
export class Publisher{
    constructor(
      private address: string,
      private name: string
    ) {
      this.address = address;
      this.name = name;
    }
  
    getName(): string {
      return this.name;
    }
  
  }