import { Component, OnInit } from '@angular/core';
import { Routine } from 'src/app/domain/routine';
import { RoutineService } from 'src/app/services/routine.service';

@Component({
  selector: 'app-search-routines',
  templateUrl: './search-routines.component.html',
  styleUrls: ['./search-routines.component.css']
})
export class SearchRoutinesComponent implements OnInit {

  patronBusqueda:string=""
  routines:Routine[]=[]
  results:Routine[]=[]
  buscadorRutinas:Buscador = new Buscador()
  inputEmpty!:string

  constructor(private routineService:RoutineService) { }


  ngOnInit(){
    this.routines = this.findRoutines()
    console.info(this.routines)
  }

  findRoutines():Routine[]{
    return this.routineService.getRoutines()
  }

  buscarRutinas(){
    this.results = this.buscadorRutinas.filter(this.routines,this.patronBusqueda)
    this.inputEmpty=""
  }

}

class Buscador{

  filter(routines:Routine[],patron:string):Routine[]{
    return routines.filter(routine=>routine.name.toLowerCase().match(patron));
  }
}
