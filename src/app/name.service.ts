import { Injectable } from '@angular/core';

@Injectable()
export class NameService {

  name = 'Joel Damon';

  constructor() { }

  getName() {
    return this.name;
  }

}
