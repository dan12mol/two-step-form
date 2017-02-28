import { Injectable } from '@angular/core';

@Injectable()
export class WordingService {

  wording = [
    {
      code: 'MILEAGE',
      singular: 'mile',
      plural: 'miles'
    }
  ]

  constructor() { }

  getWording(code: string) {
    return this.wording.find(word => word.code === code);
  }

}
