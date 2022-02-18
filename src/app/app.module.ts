import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { MovilComparadorComponent } from './component/moviles/movil-comparador/movil-comparador.component';
import { MovilMarcaComponent } from './component/moviles/movil-marca/movil-marca.component';
import { MovilesComponent } from './component/moviles/moviles.component';

@NgModule({
  declarations: [
    AppComponent,
    MovilesComponent,
    MovilMarcaComponent,
    HomeComponent,
    MovilComparadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
