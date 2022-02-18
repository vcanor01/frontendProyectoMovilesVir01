import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomResponse } from 'src/app/model/CustomeResponse';
import { Movil } from 'src/app/model/Movil';
import { MovilesService } from 'src/app/services/moviles.service';

@Component({
  selector: 'app-moviles',
  templateUrl: './moviles.component.html',
  styleUrls: ['./moviles.component.css']
})
export class MovilesComponent implements OnInit {

  myMoviles$!:Observable<CustomResponse>;
 
  marca!:string;
  marcaDos!:string;

  marcasComparar:string[]=[]
  constructor(private movilesService: MovilesService, private route:Router) { }

  ngOnInit(): void {
    this.getMoviles();
   
  }
  getMoviles(){
    this.myMoviles$= this.movilesService.moviles$;
  }

  obtenerItemComparar(item:Movil){
    if(this.marcasComparar.length==2){
      alert("El numero de marcas introducidas parar comparar es superior a 2");
    }else{
      this.marcasComparar.push(item.marca);
    }
  }
  quitarItemComparar(item:Movil){
    var indice = this.marcasComparar.indexOf(item.marca); 
    if(indice>-1){
      this.marcasComparar.splice(indice, 1);
    }
  }
  
  comprobarMarcas(){
    return this.marcasComparar.length==2;
  }
  
  
}
