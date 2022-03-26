import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainFormComponent } from './main-form/main-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DropDownListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
