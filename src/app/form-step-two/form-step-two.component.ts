import { Component, OnInit } from '@angular/core';

import { ResultService } from '../result.service';

@Component({
  selector: 'app-form-step-two',
  templateUrl: './form-step-two.component.html',
  styleUrls: ['./form-step-two.component.css']
})
export class FormStepTwoComponent implements OnInit {
  
  result;

  constructor(
    private _resultService: ResultService
  ) { }

  ngOnInit() {
  this.result = this._resultService.getResult();
  }

}
