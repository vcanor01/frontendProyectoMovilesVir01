import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomResponse } from 'src/app/model/CustomeResponse';
import { MovilesService } from 'src/app/services/moviles.service';

@Component({
  selector: 'app-movil-comparador',
  templateUrl: './movil-comparador.component.html',
  styleUrls: ['./movil-comparador.component.css']
})
export class MovilComparadorComponent implements OnInit {


  movilesComparar$!:Observable<CustomResponse>;
  marcaUno!:any
  marcaDos!:any;

  constructor(private movilesService: MovilesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.marcaUno=this.route.snapshot.paramMap.get('marca');
    this.marcaDos=this.route.snapshot.paramMap.get('marcaDos');
    
    this.getMovilesComparar();
  }

  getMovilesComparar(){
    console.log(this.marcaUno)
    console.log(this.marcaDos)
    this.movilesComparar$ = this.movilesService.getMovilesComparar(this.marcaUno, this.marcaDos);
  }

  
}
