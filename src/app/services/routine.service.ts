import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Routine } from '../domain/routine';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {

  private routines:Routine[]=[]

  constructor(private http:HttpClient) { 
    this.routines=[
      new Routine('Abdominales','Juan Perez',60),
      new Routine('Piernas','Tomás Gonzales',60),
      new Routine('Flexiones de Brazos','Leo Messi',60),
      new Routine('Correr','Rodrigo Nieto',60),
    ]
  }

  // async getRoutines(){
  //   const routines = await this.http.get('http://localhost:8080/rutinas')
  // }
  getRoutines():Routine[]{
    return this.routines
  }
}
