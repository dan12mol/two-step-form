import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormService } from '../form.service';
import { WordingService } from '../wording.service';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-form-step-one',
  templateUrl: './form-step-one.component.html',
  styleUrls: ['./form-step-one.component.css']
})
export class FormStepOneComponent implements OnInit {

  form;
  formValue;
  router;

  constructor(
    private _formService: FormService,
    private _wordingService: WordingService,
    private _resultService: ResultService,
    r: Router
    ) {
    this.router = r;
    }

  ngOnInit() {
    this.form = this._formService.getForm();
    this.form.computedAnswers = this.form.answers.sort().map(answer => answer.replace(/,/g, ''));
    this.form.computedDefault = this.form.default.replace(/,/g, '');
    this.formValue = this.form.computedDefault;
    const wording = this._wordingService.getWording(this.form.code);
    this.form.singular = wording.singular;
    this.form.plural = wording.plural;
  }

  onSubmit(formValue) {
    this._resultService.setResult({
      range: Number(formValue.range),
      wording: Number(formValue.range) === 1 ? this.form.singular : this.form.plural
    });
    this.router.navigate(['/step-two']);
  }

}
