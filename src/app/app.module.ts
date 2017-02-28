import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

import { NameService } from './name.service';
import { FormService } from './form.service';
import { WordingService } from './wording.service';
import { ResultService } from './result.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormStepOneComponent } from './form-step-one/form-step-one.component';
import { FormStepTwoComponent } from './form-step-two/form-step-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormStepOneComponent,
    FormStepTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    NameService,
    FormService,
    WordingService,
    ResultService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
