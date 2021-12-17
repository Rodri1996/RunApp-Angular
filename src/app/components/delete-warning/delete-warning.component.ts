import { Component, Input, OnInit } from '@angular/core'
import { Routine } from 'src/app/domain/routine'
import { User } from 'src/app/domain/user'
import { RoutineService } from 'src/app/services/routine.service'

@Component({
  selector: 'app-delete-warning',
  templateUrl: './delete-warning.component.html',
  styleUrls: ['./delete-warning.component.css']
})
export class DeleteWarningComponent{
  
  @Input() rutina!:Routine
  @Input() usuarioLogueado!:User
  visible=true

  constructor(private routineService:RoutineService) { }

  selectRoutine(){
    this.visible=false
  }

  async deleteRoutine(routineId:number){
    await this.routineService.deleteRoutine(routineId)
    this.occult()
  }

  occult(){
    this.visible=true
  }
}
