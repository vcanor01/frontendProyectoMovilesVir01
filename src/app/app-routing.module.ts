import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MovilComparadorComponent } from './component/moviles/movil-comparador/movil-comparador.component';
import { MovilMarcaComponent } from './component/moviles/movil-marca/movil-marca.component';
import { MovilesComponent } from './component/moviles/moviles.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'moviles',component:MovilesComponent},
  {path:'movilesMarca/:marca',component:MovilMarcaComponent},
  {path:'movilesComparador/:marca/:marcaDos',component:MovilComparadorComponent,pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
