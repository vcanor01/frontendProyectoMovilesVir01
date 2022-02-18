import { Antutu } from "./Antutu";
import { Bateria } from "./Bateria";
import { Pantalla } from "./Pantalla";
import { Procesador } from "./Procesador";
import { Ram } from "./Ram";

export interface Movil{
    id : number;
    marca : string;
    modelo: string;
    precio: number;
    antutu: Antutu;
    bateria: Bateria;
    pantalla: Pantalla;
    procesador: Procesador;
    ram: Ram;

}