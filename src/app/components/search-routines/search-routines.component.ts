import { Component, OnInit } from '@angular/core';
import { RoutineService } from 'src/app/services/routine.service';

@Component({
  selector: 'app-search-routines',
  templateUrl: './search-routines.component.html',
  styleUrls: ['./search-routines.component.css']
})
export class SearchRoutinesComponent implements OnInit {

  patronBusqueda:string=""
  //routines:Routine[]=[]
  constructor(private routineService:RoutineService) { }

  ngOnInit(){
    this.findRoutines()
  }

  findRoutines(){
    this.routineService.getRoutines()
  }

  buscarRutina(){
    
  }

}
