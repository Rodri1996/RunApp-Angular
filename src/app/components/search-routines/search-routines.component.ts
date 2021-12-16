import { Component, OnInit } from '@angular/core'
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
  inputEmpty!:string
  userLogueado!:User

  constructor(private routineService:RoutineService) { }


  async ngOnInit(){
    this.routines = await this.findRoutines()
    console.info(this.routines)
    const userJson:any = localStorage.getItem('userLogueado')
    this.userLogueado = User.fromJson(JSON.parse(userJson))
  }

  async findRoutines(){
    return await this.routineService.getRoutines()
  }

  buscarRutinas(){
    this.results = this.buscadorRutinas.filter(this.routines,this.patronBusqueda)
    this.inputEmpty=""
  }

  rutinaIdeal(routine:Routine){
    // return this.userLogueado.adoraLaRutina(routine)
    return routine.name.startsWith('A') || routine.name.startsWith('C') 
  }
}

class Buscador{

  filter(routines:Routine[],patron:string):Routine[]{
    return routines.filter(routine=>routine.name.toLowerCase().match(patron))
  }
}
