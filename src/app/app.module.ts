import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './componentes/primeiro-componente/primeiro-componente.component';
import { DadosPaiComponent } from './componentes/dados-pai/dados-pai.component';
import { DiretivasComponent } from './componentes/diretivas/diretivas.component';
import { IfRenderComponent } from './componentes/if-render/if-render.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { EmitterComponent } from './componentes/emitter/emitter.component';
import { ChangeNumberComponent } from './componentes/change-number/change-number.component';
import { ListRenderComponent } from './componentes/list-render/list-render.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    DadosPaiComponent,
    DiretivasComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
