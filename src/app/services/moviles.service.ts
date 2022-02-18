import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomResponse } from '../model/CustomeResponse';
import { Movil } from '../model/Movil';

@Injectable({
  providedIn: 'root'
})
export class MovilesService {

private readonly apiUrl = 'http://localhost:8080/moviles/';


  constructor(protected http:HttpClient) { }

  moviles$ =<Observable<CustomResponse>>this.http.get<CustomResponse>(this.apiUrl +"homeDos");

  getMovilesMarca(variableMarca:string){
   return <Observable<CustomResponse>>this.http.get<CustomResponse>(this.apiUrl+ "marca/"+variableMarca+"");
  }

  getMovilesComparar(marcaUno:string,marcaDos:string){
    return <Observable<CustomResponse>>this.http.get<CustomResponse>(this.apiUrl+marcaUno+"/"+marcaDos+"");
  }

 

}
