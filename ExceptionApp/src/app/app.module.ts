import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { MyErrorHandler } from './my-error-handler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: MyErrorHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
