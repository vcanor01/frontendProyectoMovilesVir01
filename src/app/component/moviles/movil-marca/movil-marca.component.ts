import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomResponse } from 'src/app/model/CustomeResponse';
import { MovilesService } from 'src/app/services/moviles.service';

@Component({
  selector: 'app-movil-marca',
  templateUrl: './movil-marca.component.html',
  styleUrls: ['./movil-marca.component.css']
})
export class MovilMarcaComponent implements OnInit {

  myMovilesMarca$!:Observable<CustomResponse>;
  
  movil!:any
  marca!:any;

  constructor(private movilesService: MovilesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.marca=this.route.snapshot.paramMap.get('marca');
    this.getMovilMarca();
 
  }

  getMovilMarca(){
    this.myMovilesMarca$=this.movilesService.getMovilesMarca(this.marca);
  }

}
