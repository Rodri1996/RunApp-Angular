import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Routine } from '../domain/routine'
import { User, user1, user2 } from '../domain/user'

@Injectable({
  providedIn: 'root'
})
export class RoutineService {
  
  private routines:Routine[]=[]

  constructor(private http:HttpClient) { 
    this.routines=[
      new Routine('Abdominales',user1,60),
      new Routine('Piernas',user1,60),
      new Routine('Flexiones de Brazos',user2,60),
      new Routine('Correr',user1,60),
    ]
  }

  async getRoutines(){
    const routinesJson:any = await this.http.get('http://localhost:8080/routines').toPromise()
    return routinesJson.map((routineJson:any)=>Routine.fromJson(routineJson))
  }
  
  async deleteRoutine(routineId: number) {
    console.log('id rutina '+routineId)
    await this.http.delete('http://localhost:8080/routine/'+routineId).toPromise()
  }

}

