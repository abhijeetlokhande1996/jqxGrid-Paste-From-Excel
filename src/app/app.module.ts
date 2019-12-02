import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { jqxGridModule }    from 'jqwidgets-ng/jqxgrid';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    jqxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
