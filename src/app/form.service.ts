import { Injectable } from '@angular/core';

@Injectable()
export class FormService {

  form = {
    text : "How far will you drive this year?",
    default : "6,000",
    answers :[
    "5,000", "6,000", "7,000", "8,000", "9,000"
    ],
    code : "MILEAGE" 
  };

  constructor() { }

  getForm () {
    return this.form;
  }

}
