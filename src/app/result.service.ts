import { Injectable } from '@angular/core';

@Injectable()
export class ResultService {

  result;

  constructor() { }

  getResult() {
    return this.result;
  }

  setResult(result) {
    this.result = result;
  }

}
