import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Routine } from 'src/app/domain/routine'
import { User } from 'src/app/domain/user'
import { RoutineService } from 'src/app/services/routine.service'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-search-routines',
  templateUrl: './search-routines.component.html',
  styleUrls: ['./search-routines.component.css']
})
export class SearchRoutinesComponent implements OnInit {

  patronBusqueda=""
  routines:Routine[]=[]
  results:Routine[]=[]
  buscadorRutinas:Buscador = new Buscador()
  inputEmpty=""
  busquedaActiva!:boolean
  userLogueado!:User

  constructor(private routineService:RoutineService,private router:Router) { 
    this.busquedaActiva=false
  }

  async ngOnInit(){
    await this.findRoutines()
    const userJson:any = localStorage.getItem('userLogueado')
    this.userLogueado = User.fromJson(JSON.parse(userJson))
  }

  async findRoutines(){
    this.routines = await this.routineService.getRoutines()
  }

  buscarRutinas(){
    this.busquedaActiva=true
    this.inputEmpty=""
    this.results = this.buscadorRutinas.filter(this.routines,this.patronBusqueda)
  }

  rutinaIdeal(routine:Routine){
    return routine.name.startsWith('A') || routine.name.startsWith('C') 
  }

  rutinaEliminada(routine:Routine){
    return this.routines.includes(routine)
  }

  busquedaRealizada():boolean{
    return this.patronBusqueda!=="" && this.busquedaActiva
  }
}

class Buscador{

  filter(routines:Routine[],patron:string):Routine[]{
    return routines.filter(routine=>routine.name.toLowerCase().match(patron))
  }
}
