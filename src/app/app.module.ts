import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { DadosPaiComponent } from './dados-pai/dados-pai.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    DadosPaiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
