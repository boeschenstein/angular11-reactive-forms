import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FormOverviewComponent } from './containers/form-overview/form-overview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormArrayComponent,
    FormControlComponent,
    FormGroupComponent,
    FormOverviewComponent,
  ],
  // import FormsModule if you use form object in HTML

  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
